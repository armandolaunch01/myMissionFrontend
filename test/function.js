const squad = function(x) {
    return x * x;
}

let number = 4;
let number2 = 33;
let squadNumber = squad(number);
let squadNumber2 = squad(number2);
let squadNumberAdd = squad(number) + squad(number2);
console.log("Squad of number: ");
console.log(squadNumber);
console.log("Squad of squad of number");
console.log(squad(squadNumber));
console.log("Squad of number2:");
console.log(squadNumber2);
console.log("Squad numbers addition");
console.log(squadNumberAdd);



function noise() {
    console.log("Kataplum!!!");
}

noise(); // void function example

const exponential = function(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        console.log("i value");
        console.log(i)
        console.log("base value");
        console.log(base);
        console.log("exponent value");
        console.log(exponent);
        result *= base;
    }
    return result;
}

let exponentialResult = exponential(4, 3);
console.log(exponentialResult);

//Another way to create functions

function addition(x, y) {
    return x + y;
}
console.log("Addition example")
console.log(addition(5, 5));

//Creating a function by arrow method
const subtraction = (a, b) => {
    return a - b;
}
console.log("Subtraction example");
console.log(subtraction(4, 3));

function greet(who) {
    console.log("Hello " + who);
}

console.log(greet("Armando"));
console.log("Bye");

/*
//Exceptions
function addressAnswer(answer) {
    let result = prompt(answer);
    if (result.toLowerCase() = "left") return "L";
    if (result.toLowerCase() = "right") return "R";
    throw new Error("Invalid Address" + result); //throw launch a new error
}

function lookTo() {
    if (addressAnswer("To which address?") == "L") {
        return "A house";
    } else {
        return "Two hungry bears";
    }
}

try {
    console.log("Mira a ", lookTo());
} catch (error) {
    console.log("There were an error" + error);
}*/

const toAsk = (question) => {
    let answer = prompt(question);
    answer = answer.toLowerCase();
    if (answer == "left" || answer == "right") return answer;
    throw new Error("Invalid address " + answer);
};


const lookTo2 = () => {
    let toWhere = toAsk("Which way do you turn?");
    if (toWhere == "left") {
        return "A house";
    } else {
        return "Two hungry bears";
    }
};

try {
    let toWhere = lookTo2();
    console.log("Look to ", toWhere)
} catch (error) {
    console.log("There were an error ", error);
}