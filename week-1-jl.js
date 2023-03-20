// ASSESSMENT 1: Coding Practical Questions

// // To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// // Pseudo coding your process is required.

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// // Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// // --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// // const temperatureOne = 42
// // const temperatureIndex = (temperatureOne, temperatureThree, temperatureThree)
// // if (temperatureOne > 212) {
// //     console.log(temperatureIndex)
// // } else {}

// // Expected output: "42 is below boiling point"

// const temperatureTwo = 350
// // Expected output: "350 is above boiling point"

// const temperatureThree = 212
// // Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: the question is asking for a code that will combine the two arrays and returning the length. I created a variable and used the concat method to merge the two arrays then console.log the variable with length to get return the total length of both 1984 and 1986 series runs.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);

// console.log(padresWorldSeriesRuns.length);
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code: I created another variable equaling the string then i split in the array providing and empty string, then i used the reversed method to reverse the split array then the join method to combine the array inside the string.

// const currentCohort = "Bravo 2023"
// const cohortBravo = currentCohort.split("").reverse().join("")

// console.log(cohortBravo);


// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42

// // Expected output: 7

// const givenValue2 = 10
// // Expected output: 8

// const indexValue = (value1, value2) => {
//     if (value1 === 42){
//         return myNumbers.indexValue(value1)
//     } else if (value2 === 10)

// }

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code: the question is asking to sort all the numbers in array from largest to smallest. i used a built-in sort method to arrange the elements from smallest to largest numbers. then i created a function to sort numerically. x, y arranges the number from smallest to largest, creating a return y -x; returns from largest to smallest.


// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// sanDiegoSummerTemperatures.sort(function(x, y){
//     return y - x;
// });
// console.log(sanDiegoSummerTemperatures);

// // Expected output: [82, 80, 79, 77, 76, 73, 72]


// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// sanDiegoWinterTemperatures.sort(function(x, y){
//     return y -x;
// });
// console.log(sanDiegoWinterTemperatures);
// // Expected output: [68, 67, 66, 66, 62, 59, 59]











// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: the variable colors equals "tangerine, magenta, lilac and daffodil" for the console.log colors.push "indigo" it is taking the word and adding it to the end of the original array then giving you the new length of the array in return.

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the variable cohort equals "LEARN 2023" for the console.log cohort.length it is giving the total characters length of the string which in this case is 10 including the space.


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: the variable greeting = "Hello world!" for the console.log(greeting[4]) it is asking for the fourth index letter of the element in the array. Starting from "0" which in this case the fourth letter is O in hello.


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: const languages = "Javascript, Ruby, Python, C++" and const index = 1. for the console.log(languages[index]) because the variable index equals one it is asking for the first index of the variable languages. starting from 0 the first word would be Ruby. 

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase());

// a) Your answer:"SATURDAY, SUNDAY"
// b) Verify and explain: const weekendDays = "saturday, sunday" for the console.log(weekendDays/toUpperCase()) it is taking the string and converting it to all uppercase letters. toUpperCase() is a method that returns the string value converted to uppercase. The string is the variable weekendDays which is saturday and sunday. 

// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length);

// // a) Your answer: 3
// // b) Verify and explain: const dataTypes = "number, string, boolean, undefined" for the console.log(typeof dataTypes.length); it is identifying the type of data from the original variable data type then it it asking for the length of the string.








// # ASSESSMENT 1: Tech Interview Practice Questions

// Answer the following questions.

// First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

// Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

// INSTRUCTOR EXAMPLE: What is a conditional statement?

// Your answer:

// Researched answer:

// 1. What is git? What is the difference between git and Github?

// Your answer:
// git is a version control as to github is the platform and hub to access, pull, push and merge data.

// Researched answer:
// git is a version control system that tracks changes in any set of computer files. github is an internet hosting service for software development and version control.


// 2. Which JavaScript operators will return a Boolean value?

// Your answer: && will return a boolean value.

// Researched answer: The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.

// 3. What is an index? What is the difference between index and value?

// Your answer: index is the positioning of the character or number in a string. value is a number and start from 0 as to string start from 1.

// Researched answer: The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.

// 4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

// Your answer: a string are words and characters an array is data that can have strings in them. they are both data types.

// Researched answer: Strings are similar to arrays with just a few differences. Usually, the array size is fixed, while strings can have a variable number of elements. Arrays can contain any data type (char short int even other arrays) while strings are usually ASCII characters terminated with a NULL (0) character.

// 5. Give a brief description of proper pair programming techniques. What are the roles of each person?

// Your answer: there is a driver and navigator. the driver is usually the one to type and code while the navigator gives instructions and guidance to the driver while analyzing the code. pair programming is a technique used for developers.

// Researched answer:Pair programming is a software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator,[1] reviews each line of code as it is typed in. The two programmers switch roles frequently. While reviewing, the observer also considers the "strategic" direction of the work, coming up with ideas for improvements and likely future problems to address. This is intended to free the driver to focus all of their attention on the "tactical" aspects of completing the current task, using the observer as a safety net and guide.

// ## Looking Ahead: Terms for Next Week

// Research and define the following terms to the best of your ability.

// 1. Higher Order Functions:  Higher-order functions. Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// 2. Jest: Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.

// 3. Objects: JavaScript objects are containers for named values called properties. Object Methods. Objects can also have methods.

// 4. Method:JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.

// 5. Classes: Classes are a template for creating objects. They encapsulate data with code to work on that data






