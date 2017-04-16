var readline = require('readline-sync');
var calc = require('./calc');

var a = readline.question("Please enter a number: ");
var b = readline.question("Please enter another number: ");
var operator = readline.question("Please enter an operator (+, - , / , * ): ");

switch (operator) {
    case "+":
        console.log("Result: " + calc.add(a, b));
        break;
    case "-":
        console.log("Result: " + calc.subs(a, b));
        break;
    case "/":
        console.log("Result: " + calc.divd(a, b));
        break;
    case "*":
        console.log("Result: " + calc.mult(a, b));
        break;
    default:   
        console.log("Error");
        break;
}

//console.log(a + " " + b + " " + operator);