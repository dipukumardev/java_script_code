
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
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            coutn++;
        }
    }
    console.log(coutn)
}


// lear about forEach loops (is a collback funcions)

let arr = [13, 5, 6, 7, 5, 54,];
arr.forEach(function (index) { // index mean all value of each index one by one ;
    // console.log(index)
})


// same work using an arrow functions
arr.forEach((value) => {
    // console.log(value)
})


// 
let citys = ["Patna", "Delhi", "Puna", "Kolkata"];
citys.forEach(function (name) {
    console.log(name.toUpperCase())
})


// what is the higer order functions
// ans = jab ham koi function ko as paramenter and return the any function that know as higer order functios
// example : forEach

// Q.) for a given arrays of numbers print the square of the each value using the forEach loops;


let arr2 = [2, 4, 5, 7, 8, 9, 6];
arr2.forEach(function (square) {
    console.log(square * square)
})



let num = [344, 5433, 64545];
let calsqure = (num) => {
    console.log(num ** 2)
}

num.forEach(calsqure)


// learn about map mathod;

let num2 = [3, 5, 56, 64, 7];

let new5 = num2.map((valuew) => {
    return valuew * valuew;
});

// map to use to create the new arrays;
console.log(55)


// filter is also a  collback functions 
// it can also create a new arrays;

let fil = [1, 2, 4, 7, 8, 9, 9, 7, 8]
let fil2 = fil.filter((pe) => {
    return pe % 2 === 0;
});
console.log(fil2)


// user the reduce method

let sum2 = [3, 4, 5, 6];
let output = sum2.reduce((res, cur) => {
    return res + cur;
});
console.log(output)


// find the largest number
let arrr = [3, 4, 6, 23, 5, 7];
let output2 = arrr.reduce((res, cur) => {
    return res < cur ? res : cur;
});
console.log(output2)


// we are given an arrays of marks of students. Fileter our of the marks of students that scored 90+.

let marks = [23, 42, 90, 94, 92, 96, 34, 56, 35];
let top_marks = marks.filter((mar) => {
    if (mar > 90) {
        console.log("Marks greater than 90:", mar)
    }
});
console.log(top_marks);

// Take a number n as input from user. Create an array of numbers from 1 to n. user the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate producet of all numbers in the array.

let n = prompt("Enter the number:")
let number = [];
for (let i = 0; i <= n; i++) {
    number[i - 1] = i;
}
console.log(number);

let newsum = number.reduce((res , cur)=>{
    return res + cur;
});
console.log(newsum);