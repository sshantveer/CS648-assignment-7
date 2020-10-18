/*eslint-env browser*/

//STEP 1
function displayMessage() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
var myButton2 = window.document.getElementById("button2");
myButton2.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};

//STEP 3
var myButton3 = window.document.getElementById("button3");
myButton3.addEventListener("click", display, false);
function display() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 4
var myButton4 = window.document.getElementById("button4");
myButton4.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
}, false);

//STEP 5
window.addEventListener("load", init, false);
function init() {
    "use strict";
    var myButton5 = window.document.getElementById("button5");
    myButton5.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}