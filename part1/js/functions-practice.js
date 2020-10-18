/* eslint-env browser*/

//STEP 1
function halfNumber(number) {
    "use strict";
    var result = number/2;
    window.console.log("Half of "+ number +" is " + result + ".");
}
//STEP 2
function squareNumber(number) {
    "use strict";
    var result = number * number;
    window.console.log("The result of squaring the number " + number + " is " + result + ".");
}
//STEP 3
function percentOf(number1, number2) {
    "use strict";
    var result = number1/number2 * 100;
    window.console.log(number1 + " is " + result + "% of " + number2 + ".");
}

//STEP 4
function findModulus(number1, number2) {
    "use strict";
    var result = number2 % number1;
    window.console.log(result + " is the modulus of " + number1 + " and " + number2 + ".");
}

//STEP 5
function sum(numbers) {
    "use strict";
    var sum = 0;
    for (var i = 0; i < numbers.length; i += 1) {
        sum += parseInt(numbers[i]);
    }
    window.console.log("Total Sum of the numbers entered: " + numbers + "  is = " + sum);
}

function addNumber() {
    "use strict";
    var number = window.prompt("Please enter numbers to be added. Use comma to seperate the numbers.").split(",");
    sum(number);
}


halfNumber(20);
squareNumber(5);
percentOf(50,100);
findModulus(4,8);
addNumber();
