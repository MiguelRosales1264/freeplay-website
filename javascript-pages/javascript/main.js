
/* Some common event handlers
- onclick
- onmouseover
- onmouseout
- onfocus
- onblur
- onsubmit
- onreset
- onload
- onunload
- onresize
- onscroll
- onselect
- onkeypress
- onkeydown
- onkeyup
- onchange - for form fields */


// attach onclick="myOnClick('message')" to any element
function myOnClick(message) {
    // alert("This is a " + message + "!"); 
    // prompt("Enter your name:", "Name...");
    console.log("This is a " + message + "!"); 
}

// attach onmouseover="myMouseOver('message')" to any element
function myMouseOver(message) {
    console.log("This is a " + message + "!"); 
}

// attach onload="loadFunction()" to the body tag
function loadFunction() {
    console.log("The page is loaded! " + new Date());
}

// attach onchange="myOnChange()" to any form field
var firstName;
function myOnChange() {
    console.log("You changed the value of the input field!");
    firstName = document.getElementById("inputField").value;
    console.log("The new value is: " + firstName);
}

document.getElementById("butt").onclick = function() {
    myOnClick("button");
};

document.getElementById("p1").onclick = function() {
    myOnClick("paragraph");
}

document.getElementById("inputField").onchange = function() {
    myOnChange();
}


