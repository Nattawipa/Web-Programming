//Thanakorn Pasangthien 6088109 Section 1
//Initialize Data Lucky Number
let work = ["45", "46", "78", "87", "39", "93", "56"];
let love = ["32", "24", "62", "36", "63", "69", "96"];
let wealth = ["28", "82", "45", "54", "65", "56", "78"];
let merchan = ["44", "22", "41", "16", "61", "26", "42"];
let tech = ["98", "89", "99", "59", "95", "91", "19"];
let edu = ["15", "51", "14", "41", "55", "39", "23"];

//Selecting element from HTML
let randnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output = document.getElementById("output");
let startnum = document.getElementById("inputGroup1");
let category = document.getElementById("inputGroup2");
let notnum = document.getElementById("inputGroup3");
let targetlucknumber = 0;

//Generate the result without the sum of number equal to any lucky number
function generateNormal() {
  output.value = generateNumber(startnum, category, notnum);
}

//Generate the result without that the number of number is equal to one of the lucky number in category that the user choose
function generateExtra() {
  if (category.value == "Work") {
    let test = findluck(work);
    alert("Lucky number is found" + " " + targetlucknumber);
    output.value = test;
  } else if (category.value == "Love") {
    let test = findluck(love);
    alert("Lucky number is found" + " " + targetlucknumber);
    output.value = test;
  } else if (category.value == "Wealth") {
    let test = findluck(wealth);
    alert("Lucky number is found" + " " + targetlucknumber);
    output.value = test;
  } else if (category.value == "Merchandising") {
    let test = findluck(merchan);
    alert("Lucky number is found" + " " + targetlucknumber);
    output.value = test;
  } else if (category.value == "Technology") {
    let test = findluck(tech);
    alert("Lucky number is found" + " " + targetlucknumber);
    output.value = test;
  } else if (category.value == "Education/Wiseness") {
    let test = findluck(edu);
    alert("Lucky number is found" + " " + targetlucknumber);
    output.value = test;
  }
}

//find the lucky number that the sum of number is equal any lucky number in category
function findluck(category_arr) {
  let temp = generateNumber(startnum, category, notnum);
  let notfound = true;
  let result = 0;
  while (notfound) {
    if (sumofDigit(temp) == targetlucknumber) {
      result = temp;
      notfound = false;
    } else {
      temp = generateNumber(startnum, category, notnum);
    }
  }
  return result;
}

//generate number that follow the criteria
function generateNumber(startnum, category, notnum) {
  let lucky;
  randnum = deleteNotNum(notnum);
  work = deleteLuckyNotNum(notnum, work);
  love = deleteLuckyNotNum(notnum, love);
  wealth = deleteLuckyNotNum(notnum, wealth);
  merchan = deleteLuckyNotNum(notnum, merchan);
  tech = deleteLuckyNotNum(notnum, tech);
  edu = deleteLuckyNotNum(notnum, edu);
  if (category.value == "Work") {
    lucky = randomnumber(work, startnum, randnum);
  } else if (category.value == "Love") {
    lucky = randomnumber(love, startnum, randnum);
  } else if (category.value == "Wealth") {
    lucky = randomnumber(wealth, startnum, randnum);
  } else if (category.value == "Merchandising") {
    lucky = randomnumber(merchan, startnum, randnum);
  } else if (category.value == "Technology") {
    lucky = randomnumber(tech, startnum, randnum);
  } else if (category.value == "Education/Wiseness") {
    lucky = randomnumber(edu, startnum, randnum);
  }
  return lucky;
}

//generate number that we need
function randomnumber(category_arr, startnum, randnum) {
  let result = startnum.value;
  let luckynum = category_arr[Math.floor(Math.random() * category_arr.length)];
  targetlucknumber = luckynum;
  result += luckynum;
  for (let i = 0; i < 5; i++) {
    result += randnum[Math.floor(Math.random() * randnum.length)];
  }
  return result.trim();
}

//sum the phone number
function sumofDigit(result) {
  let str = result.toString();
  sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }
  return sum;
}

//delete not include number out of randnum array
function deleteNotNum(notnum) {
  const result = randnum.filter((num) => {
    return num != notnum.value;
  });
  return result;
}

//delete any lucky number that have not include number
function deleteLuckyNotNum(notnum, category_arr) {
  const result = category_arr.filter((num) => {
    return num.charAt(0) != notnum.value && num.charAt(1) != notnum.value;
  });
  return result;
}
