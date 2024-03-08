
// function use (a block of code that perform a speical take)
function name() {
    console.log("java script is a good programing lang");
};
// name(); // it is also know as arugumetns;

// Q. make a function to print the sum of two number;

function sum(a, b) {
    //    console.log(a+b)
}

sum(4, 5);


//  How to use return function;
function sum(a, b) {
    let s = a + b;
    return s;
}
let final_age = sum(23, 46);
// console.log(final_age);



// Making a  arrow functions
const age = (a, b) => {
    let school_chile = a + b;
    return school_chile;
};

let ageFinal = age(2, 65);
// console.log(ageFinal)


//  Q.) create a function using a function key that take a string as an arguments and return the number of volubal of the string;

// function countVowel(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count = count + 1;
//         }
//     }
//     console.log(count)
// }
// countVowel("dipu kumar");



// same work to the arrow functions;
const countVowel = (str) => {
    let coutn = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
            coutn++;
        }
    }
    console.log(coutn)
}


