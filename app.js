// ============ TASK 1 ============
console.log("--- Task 1 ---");

let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
fruits.shift();
fruits.unshift("grape");

console.log("Final fruits:", fruits);


// ============ TASK 2 ============
console.log("\n--- Task 2 ---");

let colors = ["red", "blue", "green", "blue", "yellow"];

let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");

let results = [includesResult, firstIndex, lastIndex];
console.log("Results:", results);


// ============ TASK 3 ============
console.log("\n--- Task 3 ---");

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

let allTeams = teamA.concat(teamB);
allTeams.push("Eve");

console.log("Final allTeams:", allTeams);


// ============ TASK 4 ============
console.log("\n--- Task 4 ---");

let numbers = [10, 20, 30, 40, 50];

let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);

console.log("middleNumbers:", middleNumbers);
console.log("numbers:", numbers);


// ============ TASK 5 ============
console.log("\n--- Task 5 ---");

let scores = [85, 70, 95, 60, 75];

scores.sort(function(a, b) {
    return a - b;
});
scores.reverse();

console.log("Final scores:", scores);