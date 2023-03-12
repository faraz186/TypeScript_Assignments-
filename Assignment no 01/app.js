"use strict";
// *******************************Exercise of Whole Things Program**************************
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
function EditRoll() {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
        const Userinput = input("Please enter your roll no");
        arr.push(Userinput);
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "PIAIC06") {
            console.log("Not allowed in Class", j);
            break;
        }
        else {
            console.log("Allowed");
        }
    }
    console.log(arr);
}
EditRoll();
// *********************************Assignment no: 01*************************************
// *******Task 1**********
let englishMarks = 75;
let urduMarks = 67;
let average = (englishMarks + urduMarks) / 2;
console.log("Your total average is: ", average);
if (average >= 80) {
    console.log("Grade A");
}
else if (average >= 70 && average < 80) {
    console.log("Grade B");
}
else if (average >= 60 && average < 70) {
    console.log("Grade C");
}
else if (average < 60) {
    console.log("Grade F");
}
// ******************Task 2*******************
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("grapes");
console.log(fruits);
fruits.unshift("oranges");
console.log(fruits);
let copy = fruits.splice(1, 2, "strawberry", "mango");
console.log(copy);
console.log("\n");
// ----------------------------------------------------------------
console.log("Final result of an Array: ", fruits);
// ******************Task 3*******************
function Product(ProductPrice, DisPercentage) {
    let discountAmount = ProductPrice * (DisPercentage / 100);
    console.log(DisPercentage);
    if (DisPercentage >= 50) {
        return console.log("the discount percentage is invalid");
    }
    else {
        console.log("Original price: ", ProductPrice);
        console.log("Discount Percentage: ", DisPercentage);
        console.log("Discount Amount: ", discountAmount);
        console.log("Final output of the product: ", discountAmount);
    }
}
let product = parseInt(input("Enter Product Price"));
let DisCount = parseInt(input("Enter Discount Percentage"));
Product(product, DisCount);
// ******************Task 4*******************
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
const num = parseInt(input("Enter any number: "));
const result = factorial(num);
console.log(`The factorial of '${num}' is ${result}.`);
///////////////////////////////////////////Ends Here/////////////////////////////////////////////////// 
