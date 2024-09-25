// Task 1: Variables and Operators
// a. Create Variables for your name, age, and your city of residence.
let name = "Paul Justin O. Mercado"; 
let age = 20; 
let city = "Iba, Zambales";

// b. Calculate and store the year you were born using your age and the current year.
const currentYear = new Date().getFullYear();
let yearBorn = currentYear - age;

// c. Define a boolean variable that checks if your age is greater than or equal to 18.
let isAdult = age >= 18;

// d. Use arithmetic operators to find the remainder when dividing your age by 5.
let ageRemainder = age % 5;

// Task 2: String Manipulation
// a. Concatenate your name and city into a sequence using string operators.
let introduction = `I'm ${name} from ${city}`;

// b. Create a function that accepts a string and returns the string in uppercase.
function toUpperCase(str) {
    return str.toUpperCase();
}

// c. Create a function that finds and returns the first occurrence of the letter 'a' in any given string.
function findFirstA(str) {
    return str.indexOf('a');
}

// d. Replace all instances of the word "JavaScript" in the following string with "JS".
let originalString = "I am learning JavaScript at School.";
let modifiedString = originalString.replace(/JavaScript/g, "JS");

// Task 3: Array Manipulation
// a. Create an array with at least 5 of your favorite foods.
let favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Pasta", "Ice Cream"];

// b. Add a new food at the end of the array.
favoriteFoods.push("Chicken Adobo");

// c. Remove the second food from the array.
favoriteFoods.splice(1, 1); // Removes the item at index 1

// d. Sort the array in alphabetical order.
favoriteFoods.sort();

// e. Create a function that loops through the array and prints each food on a new line.
function printFavoriteFoods(foods) {
    foods.forEach(food => {
        console.log(food);
    });
}

// Logging results to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Year Born:", yearBorn);
console.log("Is Adult:", isAdult);
console.log("Age Remainder when divided by 5:", ageRemainder);
console.log("Introduction:", introduction);
console.log("Uppercase Example:", toUpperCase(introduction));
console.log("The index of the first occurrence of 'a' is:", findFirstA(introduction));
console.log("Original String:", originalString);
console.log("Modified String:", modifiedString);
console.log("Favorite Foods Array:", favoriteFoods);
console.log("Printing Favorite Foods:");
printFavoriteFoods(favoriteFoods);
