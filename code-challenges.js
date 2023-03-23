// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: I created a variable  and named it boilingNumber then did an if statement if number is 212 then it will return is at boiling point. Else if number is less than 212 then it will return below boiling point. Else for everything else will return above boiling point.

const temperatureOne = 42
// Expected output: "42 is below boiling point"

const temperatureTwo = 350
// Expected output: "350 is above boiling point"

const temperatureThree = 212
// Expected output: "212 is at boiling point"

const boilingNumber = (num) => {
 
  if (num === temperatureThree){
    return `${num} is at boiling point.`
   
  } else if (num<temperatureThree){
    return `${num} is below boiling point`
   
  } else {
    return `${num} is above boiling point`
  }
}
console.log(boilingNumber(temperatureOne)); 
console.log(boilingNumber(temperatureTwo));
console.log(boilingNumber(temperatureThree));


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: the question is asking for a code that will combine the two arrays and returning the length. I created a variable and used the concat method to merge the two arrays then console.log the variable with length to get return the total length of both 1984 and 1986 series runs.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);

console.log(padresWorldSeriesRuns.length);
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: I created another variable equaling the string then i split in the array providing and empty string, then i used the reversed method to reverse the split array then the join method to combine the array inside the string.

const currentCohort = "Bravo 2023"
const cohortBravo = currentCohort.split("").reverse().join("")

console.log(cohortBravo)
// Expected output: "3202 ovarB"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.


// Pseudo code: i created a variable and named it lastValue that takes 2 parameters array and number then i used the lastOfIndex method to return the value of number.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValueOne = 42
// Expected output: 7

const givenValueTwo = 10
// Expected output: 8

const lastValue = (array, num) => {
 
  return array.lastIndexOf(num)
}

console.log(lastValue(myNumbers,givenValueOne));
console.log(lastValue(myNumbers,givenValueTwo));


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: the question is asking to sort all the numbers in array from largest to smallest. i used a built-in sort method to arrange the elements from smallest to largest numbers. then i created a function to sort numerically. x, y arranges the number from smallest to largest, creating a return y -x; returns from largest to smallest.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
sanDiegoSummerTemperatures.sort(function(x, y){
    return y - x;
});
console.log(sanDiegoSummerTemperatures);
// Expected output: [82, 80, 79, 77, 76, 73, 72]


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoWinterTemperatures.sort(function(x, y){
    return y -x;
});
console.log(sanDiegoWinterTemperatures);
// Expected output: [68, 67, 66, 66, 62, 59, 59]