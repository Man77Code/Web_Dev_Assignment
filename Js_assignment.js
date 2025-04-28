// Q1 : Check if a number is positive , negative or zero

// let num = 10;

// if(num>0){
//     console.log("The number is positive");
// }else if(num<0){
//     console.log("The number is negative");
// }else if(num===0){
//     console.log("The number is zero");
// }else{
//     console.log("The invalid input");
// }

// output : The number is positive

// Q 2 : Check if a number is even or odd.

// let num = 7;

// if (num % 2 == 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

// The number is odd

// Q 3 : Find the largest of two numbers:

// let num1 = 10 ;
// let num2 = 9;

// if(num1>num2){
//     console.log("The num1 is largest");
// }else if(num1<num2){
//     console.log("The num2 is largest");
// }else{
//     console.log("The invalid input");
// }

// Output : The num1 is largest

// Q 4 : Check eligibility to vote (age >=18);

// let age = 23;

// if(age>=18){
//     console.log("your are eligible to vote");
// }else if(age<18){
//     console.log("Sorry your not eligible for vote");
// }else{
//     console.log("sorry invalid input");
// }

//your are eligible to vote

// Q5.Grade calculator:

// let marks = 97;
// let grade = "";
// if (marks > 90 || marks < 100) {
//   grade = "A+";
// } else if (marks > 80 || marks < 90) {
//   grade = "A";
// } else if (marks > 70 || marks < 80) {
//   grade = "B+";
// } else if (marks > 60 || marks < 70) {
//   grade = "B";
// } else if (marks > 50 || marks < 60) {
//   grade = "C+";
// } else if (marks > 40 || marks < 50) {
//   grade = "C";
// } else if (marks > 35 || marks < 40) {
//   grade = "d";
// } else if (marks < 35) {
//   grade = "f";
// } else {
//   console.log("Please add marks");
// }
// console.log(grade); // A+

// Q 6 : Number guessing game :

// let numInput = parseInt(prompt("Enter a num:- "));
// let gueesedNumber = 7;
// if(numInput===gueesedNumber){
//     console.log("Cheers you guessed right number");
// }else if(numInput!=gueesedNumber){
//     console.log("Sorry better luck next time");
// }else{
//     console.log("Please chek your input");
// }

// output : Sorry better luck next time

// Q 7 simple calculaor using if else:

// let num1 = 10;
// let num2 = 20;
// let result = 0;

// let sign = prompt("+,-,*,/");

// if (sign == "+") {
//   result = num1 + num2;
// } else if (sign == "-") {
//   result = num1 - num2;
// } else if (sign == "*") {
//   result = num1 * num2;
// } else if (sign == "/") {
//   result = num1 / num2;
// } else {
//   console.log("invalid signs..");
// }
// console.log(result);

// 30 


// Q 8 : This is an animal tree where you have to print data base on the user's input..

// Input values (you can change these values to test)
let height = 0.5; // in feet
let canSqueak = true; // true or false
let neckLength = ""; // 'short' or 'long'
let noseLength = ""; // 'short' or 'long'
let habitat = ""; // 'land' or 'water'

if (height < 1) {
    if (canSqueak) {
        console.log("Might be a rat");
    } else {
        console.log("Might be a squirrel");
    }
} else { // height >= 1
    if (neckLength === "long") {
        console.log("Might be a giraffe");
    } else if (neckLength === "short") {
        if (noseLength === "long") {
            console.log("Might be an elephant");
        } else if (noseLength === "short") {
            if (habitat === "land") {
                console.log("Might be a rhinoceros");
            } else if (habitat === "water") {
                console.log("Might be a hippo");
            } else {
                console.log("Habitat not recognized");
            }
        } else {
            console.log("Nose length not recognized");
        }
    } else {
        console.log("Neck length not recognized");
    }
}

// output : Might be a rat !!