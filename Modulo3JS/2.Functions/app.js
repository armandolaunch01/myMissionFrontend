//Square of a number
const square = function(x) {
    return x * x;
}

let number = 4;
console.log(square(number));

//String example
const noise = function() {
    console.log("Kataplum!!!");
}
noise();
//Exponential
const exponential = function(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base
    }
    return result;
}
console.log(exponential(4, 3));

//ADD
console.log(add(5, 65));

function add(x, y) {
    return x + y;
}
//SUBTRACT
const subtract = (a, b) => {
    return a - b;
}
console.log(subtract(40, 8));

//GREET
function greet(who) {
    console.log("Hello " + who);
    return;
}
greet("Explorer");
console.log("Bye");

//Exceptions try catch
/*
function addressQuestion(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid address: " + result);
}

function look() {
    if (addressQuestion("Which side") == "L") {
        return "One house";
    } else {
        return "two hungry bears";
    }
}
try {
    console.log("Look to ", look());
} catch (error) {
    console.log("There was a mistake: " + error);
}
*/

//Asynchronous
setTimeout(() => console.log("Tik"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promise = () =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => (resolve(console.log('All cool')), reject(new Error('oops'))),
            2000
        )
    )

async function main() {
    await promise();
    console.log('Here finish first promise');
    await promise();
    console.log('Here finish second promise');
}

main();