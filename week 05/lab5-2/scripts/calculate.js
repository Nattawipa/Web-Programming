function doIt()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, num3Ref, answerRef,oddorevenRef; 
    
    // Variables declarations.
    var num1, num2, num3, answer,oddoreven; 
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    answerRef = document.getElementById("answer");
    oddorevenRef = document.getElementById("oddoreven");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    
    // Perform addition operation then assignment operation
    answer = num1 + num2+num3; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }

    if(answer%2==0){
        oddorevenRef.className = "even" ;
        oddorevenRef.innerText = "(even)";
    }
    else
    {
        oddorevenRef.className = "odd";
        oddorevenRef.innerText = "(odd)";
    }
}
    
    
function doIt2()
{
    var num1Ref2, num2Ref2, num3Ref2, answerRef2,oddorevenRef2; 
    
    var num12, num22, num32, answer2,oddoreven2; 
    
    num1Ref2= document.getElementById("num12");
    num2Ref2 = document.getElementById("num22");
    num3Ref2 = document.getElementById("num32");
    answerRef2 = document.getElementById("answer2");
    oddorevenRef2 = document.getElementById("oddoreven2");

    num12 = Number(num1Ref2.value);
    num22 = Number(num2Ref2.value);
    num32 = Number(num3Ref2.value);
    
    answer2 = num12 - num22-num32; 

    answerRef2.innerText = answer2;
    
    if (answer2 >= 0)
    {
        answerRef2.className = "positive";
    }
    else
    {
        answerRef2.className = "negative";
    }

    if(answer2%2==0){
        oddorevenRef2.className = "even" ;
        oddorevenRef2.innerText = "(even)";
    }
    else
    {
        oddorevenRef2.className = "odd";
        oddorevenRef2.innerText = "(odd)";
    }
}
    