//---------------------------------------------------------set global variable---------------------------------------------------------
var categories;
var checkBox;
var china;
var random_position;
var first = "085"; //13

// put number for each category
let work = ["45", "46", "78", "87", "39", "93", "56"];
let love = ["32", "24", "62", "36", "63", "69", "96"];
let wealth = ["28", "82", "45", "54", "65", "56", "78"];
let merchan = ["44", "22", "41", "16", "61", "26", "42"];
let tech = ["98", "89", "99", "59", "95", "91", "19"];
let edu = ["15", "51", "14", "41", "55", "39", "23"];

//------------------------------------------------------------ fuction generate () ------------------------------------------------------------
function generate() //create function namr generate
{
  //------------------------------------------------------------checkBox section------------------------------------------------------------ 
  var checkBox = document.getElementsByName("digit"); // create checkBox variable to get the element from html 
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var noneed_number = [];
  //check ckeckbox
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked === true) {
      let temp = checkBox[i].value
      let check = false;
      for (let j = 0; j < number.length; j++) {
        if (number[j] === checkBox[i].value || check) {
          if (j < number.length - 1) {
            check = true;
            number[j] = number[j + 1]
          } else {
            number[j] = temp;
          }
        }
        // console.log(number)
      };
      noneed_number.push(number.pop()); //put all of pop number into another array
      //console.log(noneed_number)
    }
  }
  console.log(number); // show the rest number or need number that can be used
  // console.log(noneed_number);    // show no need number that can not be used
  // -----------------------------------------------------check category that user choose-----------------------------------------------------
  let select_category = document.getElementById("Category").value;
  console.log("Category : " + select_category); //show category that selected

  var cat = []; //use to separate a pair of require number in each categoryin individual index 
  //switch case for each category
  switch (select_category) {
    case "WORK":
      cat = work;
      break;
    case "LOVE":
      cat = love;
      break;
    case "WEALTH":
      cat = wealth;
      break;
    case "MERCHANDISING":
      cat = merchan;
      break;
    case "TECHNOLOGY":
      cat = tech;
      break;
    case "EDUCATION / WISENESS":
      cat = edu;
      break;
  }
  //separate each number in category and check it out
  for (let i = 0; i < noneed_number.length; i++) {
    for (let j = 0; j < cat.length; j++) {
      if (noneed_number[i] === cat[j][0] || noneed_number[i] === cat[j][1]) {
        delete cat[j];
      }
    }
    // console.log(cat);
    cat = cat.filter(Boolean);
  }
  // console.log(cat); //show the number that can used from that category

  //---------------------------------------------random 5 number and random it position-----------------------------------------------------
  let space = 7;
  let random_num = '';
  while (space !== 0) {
    if (space > 2) {
      const isSelectLucky = Math.floor(Math.random() * 2) === 1; //*2 to make more chance torandom
      if (isSelectLucky) {
        const luckNumber = cat[Math.floor(Math.random() * cat.length)].toString();
        random_num += luckNumber
        space -= 2;
      } else {
        random_num += number[Math.floor(Math.random() * number.length)];
        space--;
      }
    } else {
      random_num += number[Math.floor(Math.random() * number.length)];
      space--;
    }

  }
  // console.log(random_num); //random 7 digits by random
  // console.log("LUCK PHONE NUMBER IS : " + random_num);

  //bring  category name fron html
  categories = document.getElementsByName("category")[0];

  //-----------------------------------------------------show output by using inner html-----------------------------------------------------
  china = document.getElementById("nongnam");
  china.innerHTML =
    "<h2>Lucky Phone Number Generator (  " + categories.value + " )</h2><br>" +
    "<h3>" + first + random_num + "</h3>";
  return first + random_num;
}

//---------------------------------------------------- function generateExtra () for extra point ---------------------------------------------------------//

function generateExtra() {
  let arr = [];
  let allsum = []
  let select_category = document.getElementById("Category").value;
  var select = []; //use to separate a pair of require number in each categoryin individual index 
  //switch case for each category
  switch (select_category) {
    case "WORK":
      select = work;
      break;
    case "LOVE":
      select = love;
      break;
    case "WEALTH":
      select = wealth;
      break;
    case "MERCHANDISING":
      select = merchan;
      break;
    case "TECHNOLOGY":
      select = tech;
      break;
    case "EDUCATION / WISENESS":
      select = edu;
      break;
  }
  //generate the number for a thousand time and sum it to be eaqual to one of it in the category
  for (var i = 0; i < 1000; i++) {
    let sum = 0;
    let phone = 0;
    phone = generate();

    for (let i = 0; i < phone.length; i++) {
      sum = sum + parseInt(phone[i]);
    }
    // console.log(sum)

    for (let i = 0; i < select.length; i++) {
      if (sum == select[i]) {
        arr.push(String(phone))
        allsum.push(sum);
      }
    }
  }
  //show the output
  china = document.getElementById("nongnam");
  if (arr.length> 0) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i] + "wdawd")
      console.log(allsum[i])
      console.log(arr)
      console.log(allsum)
      china.innerHTML += "<h3>" + arr[i] + " (" + allsum[i] + ")";
    }
  }
  else
  {
    china.innerHTML = "<h1>ERROR 404 </h1> ";
  }
}