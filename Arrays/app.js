// Arrays are the collection of the items; 

// Arrays is object type

let marks = [1, 2, 3, 4, 5, 6, 67, 7, 7];
// console.log(marks); 

console.log(marks[1]) // to print the index through the vlaue;

marks[2] = marks[2] = 99;

console.log(marks) // to change the value of the arrays elements to the index;

console.log(marks.length);     // length is a property means it give the value; and method are do some work;

let heroes = ["dipu", "Aditya", "Ritesh singh", "Shreeansh", "special one❤️"];

console.log(heroes);

console.log(heroes.length)




// LOPING OVER AN ARRAYS


for (let i in marks) {
    // console.log(marks[i])  // this is uer of the for in loops
}


// FOR OF LOOP USE 

for (let i of marks) {
    // console.log(i)  // this is uer of the for in loops
}



// for loops 

for (let i = 0; i < heroes.length; i++) {
    // console.log(heroes[i])
}


let cities = ["Delhi", "pune", "Patna", "Mumbai"];
for (let city of cities) {
    // console.log(city.toUpperCase())
}


// Q. FOR A GIVEN ARRAYS WITH A MARKS OF STUDENTS [85 , 99, 45, 67, 87, 45] FIND THE AVERAGE MARKS OF THE ALL STUDENTS;

let Marks = [85, 97, 45, 67, 87, 45];
let sum = 0;
for (let value of Marks) {
    sum = sum + value;

    // sum += value;
}
let avg = sum / Marks.length;

console.log(`The avg value of the all students is ${avg}`)
// console.log(sum)

// console.log("Avrage of the sum : " , avg);


// Q. FOR A GIVEN ARRAYS  WITH PRICES OF 5 ITEMS -> [250, 645, 300, 900, 50 ] ALL ITEMS HAVE AN OFFER OF 10% ON THEM. CHANGE THE ARRAYS TO STORE FINAL PRICE AFTER APPLYING OFFER.



