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

// solving the question useing the for of loos

let i = 0;
let prices = [250, 645, 300, 900, 50];
for (let val of prices) {
    let offer = val / 10;
    prices[i] = prices[i] - offer;

    // console.log(`value after offer  i is ${i} and = ${prices[i]}`)

    i++;
}

// solving the question using the for loops;


for (let index = 0; index < prices.length; index++) {
    let offering = index / 10;
    prices[index] = prices[index] - offering;
    console.log(`Final price affter discound : ${prices[index]}`)
}



// learn about arrays methods

let food_items = ["Rice", "Dal", "Roti", "Dahi"];

console.log(food_items)

food_items.push("chiken", "fish") // push method change the orginal items;

console.log(food_items)

let deleted_items = food_items.pop() // remove the last items and change the main arrays;

// console.log(food_items)
// console.log(" deleted items is:", deleted_items)


// console.log(food_items.toString()); // this line use to convert the arrays to strings; they do not change the orignal arrays they return new arrays;


// use of concat to add the two strigs; 

let name = ["Himanshu", "Munna", "dipu"];
let sinner = ["Harsh", "samer", "Ratnash"];
let mix = name.concat(sinner);

// console.log(mix)

// unshift() use to add in start;
// shift() use to remove first elemnts;


// slice() to return the a part of strings; //do not change original arrays;
let slice = sinner.slice(0,2,)

// console.log(slice)


// splice() how to use the splice method;


let name2 = ["dipu", "nirbhay", "rohit"];
name2.splice(0, 2, "Aditya","Mohini")
console.log(name2)


// make a intraction questions i)  remove first company 
let company = ["google", "ubar", "sh groups","Microsoft"];
company.shift()
console.log(company)
company.splice(1,1,"ola")
console.log(company)
company.push("amazon")
console.log(company)