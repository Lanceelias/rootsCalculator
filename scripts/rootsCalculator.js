'use strict';

const quadInput = document.getElementById("quadInput");
const button = document.getElementById("button");
const result = document.getElementById("result")
const solve = document.getElementById("solve");


function calculateRoot() {

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let message = document.getElementById("result");

    if (a === "" || a === 0) {
        alert("Invalid for a. Must be a non-zero integer between -99 and +99\n");
    }
    if (b === "") {
        alert("Invalid for b. Must be an integer between -99 and +99\n");
    }
    if (c === "") {
        alert("Invalid for a. Must be an integer between -99 and +99\n");
    }

    a = Number(a);
    b = Number(b);
    c = Number(c);
    


    let x1 = (-b + Math.sqrt(Math.pow(b,2) - (4 * a * c))) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b,2) - (4 * a * c))) / (2 * a);

    
    if (Math.pow(b,2) < (4 * a * c)) {
         message.innerHTML = "Solution: x's roots are imaginary";
    }

    if (Math.pow(b,2) == (4 * a * c)) {
        message.innerHTML = "Solution: x = x1";
    }
    if (Math.pow(b,2) > (4 * a * c)) {
        message.innerHTML = "Solution: x = x1, x = x2";
    }

}



solve.addEventListener('click', function(){
    calculateRoot()
});




