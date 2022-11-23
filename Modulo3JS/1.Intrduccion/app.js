//Variables

console.log("**************Variables**************");

var number1 = 4;
var number2 = 6;
console.log("Number 1:" + number1 + " Number 2:" + number2);

console.log("**************Strings**************");

var phrase1 = "Simple quote example";
var phrase2 = "Double quote example";
var phrase3 = `"Backtick ${phrase1} example"`;

console.log(phrase1 + "\n" + phrase2 + "\n" + phrase3);

/* Conditional can be use values like "< > = == ===" and every each have a comparison functionality between elements */

console.log("\n************ Logical operator AND ************\n");
console.log(number1 != number2);

console.log("\n Logic Operator AND \n");
console.log(true && true);

console.log("\n Logic Operator OR");
console.log(false || false);

/* Arrays are data structures, its let us group data of the same type */
console.log("\n***Arrays***\n");

let numberList = [2, 3, 4, 5, 6];
console.log(numberList);
console.log(numberList[4]);

numberList.push(423432);
numberList.push(876867);

console.log(numberList);
console.log(numberList.length);

let wordList = ["Hello", "sky", "dog", "cat"];
console.log(wordList);
console.log(wordList.length);

/*Objects are data structures, it let us group data of different types*/
console.log("\n**Objects***\n");

let explorer = {
    name: "Angus",
    email: "angus@mail.com",
    numReg: 1245,
    mission: "Frontend",
    projects: ["RobotLawyer", "Taquería", "Cake shop", "Vaccination"],
    proPer: {
        school: "Task",
        professional: "work",
        personal: "Business"
    }
}

console.log(explorer);

console.log(explorer.proPer.personal);


/*Conditional flow*/

var number1 = 2;
var number2 = 6;


console.log("\n*** If / else ***\n");
if (number1 > number2 && number2 > 5) {
    console.log("Number1 is more greatest than number2")
} else if (number1 == number2 || number1 < 3) {
    console.log("Numbers are equals");
} else {
    console.log("Number2 is greatest than number1")
}


/*function test(myNumber1, myNumber2) {

    var myNumber1;
    var myNumber2;
    if (myNumber1 > number2 && myNumber2 >= 5) {
        console.log("Number1 is greatest")
    } else if (myNumber1 == myNumber2 || myNumber1 < 3) {
        console.log("Numbers are equals");
    } else {
        console.log("Number2 is greatest than number1")
    }
}
console.log(test(6, 4));*/

//Conditional cycle

console.log("\nWhile\n");

let numberWhile = 5;
while (numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2
}
console.log("Here it already out of while");

//Conditional cycle of minimum one iteration
console.log("\n***Do wile***\n");
let numberDoWhile = 22;
do {
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
} while (numberDoWhile < 20);
console.log("Here it already out of while:   " + numberDoWhile);

/*For cycle with controlled iteration*/
console.log("\n*** For ***\n");

let numberFor = 0;
for (numberFor; numberFor <= 12; numberFor++) {
    console.log(numberFor);
}
console.log("Here it already out of for:  " + numberFor);

/*Options to avoid conditional nested*/
console.log("\n***Switch***\n");

switch (prompt("How is the weather?")) {
    case "rainy":
        console.log("You'll not wet");
        break;
    case "sunny":
        console.log("Use sunscreen");
        break;
    case "foggy":
        console.log("Wrap up well");
        break;
    default:
        console.log("I don't know how is will be the weather");
        break;
}

console.log("Here it already out of switch  ");