// how to declare string in various type

// let str = "dipu kumar";
// let str2 = 'aditya singh';
// let str3 = `this time use to backtic symbole `; // this type is know as template literals in js and defi is : a way to have embedded expressions in strings;
// console.log(str)
// console.log(str2)
// console.log(str3)


// how to access the object to the items;

// let obj ={
//     item:"pencil",
//     price:20,
//     year:2024
// };
// // console.log("Item name is ", obj.item , " and its price is ", obj.price , "and it lounched year is:" , obj.year);
// console.log(`Item name is  ${obj.item} and price ${obj.price} lounched year is ${obj.year}`)// this know as string interpolations;



// to perform some activity in string;

// let str = "dipu kumar";
// //  let str2 = str.toUpperCase();
// str= str.toUpperCase();
// console.log(str)

// tolowerCase();
//trime(); // to remove the white space (startin and end to remove the white space)
//concat(); add the two string;
//replace(); to use to replace the itmes; like (d , a) so (d) is replace by (a);
//charAt(); to use to find the index of the character;


// let str2 = "dipu kumar";
// str2 = str2.slice(0,3) // last index are not added
// console.log(str2)




// practic question

// Prompt the user to their full name. generate a username for them based on the input.start username with @ and followed by thier user name and endingh with full length.

let user_name = prompt("Enter your Name:")
let add = "@" + user_name + user_name.length;
console.log(add)

