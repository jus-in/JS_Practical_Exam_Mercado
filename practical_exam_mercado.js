// Task 1: Variables and Operators
// a. Create Variables for your name, age, and your city of residence.
let name = "Paul Justin O. Mercado"; 
let age = 20; 
let city = "Iba, Zambales";

const currentYear = new Date().getFullYear();
let yearBorn = currentYear - age;
let isAdult = age >= 18;
let ageRemainder = age % 5;

// Task 2: String Manipulation

let introduction = `I'm ${name} from ${city}`;

function toUpperCase(str) {
    return str.toUpperCase();
}
function findFirstA(str) {
    return str.indexOf('a');
}

let originalString = "I am learning JavaScript at School.";
let modifiedString = originalString.replace(/JavaScript/g, "JS");

// Task 3: Array Manipulation

let favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Pasta", "Ice Cream"];
favoriteFoods.push("Chicken Adobo");
favoriteFoods.splice(1, 1);
favoriteFoods.sort();

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
