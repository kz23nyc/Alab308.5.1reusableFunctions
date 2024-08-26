/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 *
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return str === "" ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"));
console.log(reverseString2("!dlroW olleH"));
console.log(reverseString3("!dlroW olleH"));
console.log(reverseString4("!dlroW olleH"));
console.log(reverseString5("!dlroW olleH"));

//======================================================================================

//Part 1: Thinking Functionally

//Take an array of numbers and return the sum.

//create numbers
const numbers = [1, 2, 3, 4, 5];

// create a variable for the sum and intialize it
// calculate the sum of an array using a for loop
// iterate over each item in the array

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumArray(numbers)); // 15
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Take an array of numbers and return the average.

function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}

console.log(averageArray(numbers));
console.log(averageArray([1, 2, 3, 4, 5, 6, 7]));

// Take an array of strings and return the longest string.
function longestString(strings) {
  let longest = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}

console.log(
  longestString(["Cherry", "Watermelon", "Apricot", "Raspberry", "Avocado"])
); //Watermelon

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function findLongStrings(strings, length) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > length) {
      result.push(strings[i]);
    }
  }
  return result;
}
const array = ["Cherry", "Watermelon", "Apricot", "Raspberry", "Avocado"]
const minLength = 6;
const maxlength = 9;
console.log(findLongStrings(array,length)); // 5 ["Cherry", "Watermelon", "Apricot", "Raspberry", "Avocado"]
console.log(findLongStrings(array,minLength)); // 4 ["Watermelon", "Apricot", "Raspberry", "Avocado"]
console.log(findLongStrings(array,maxlength)); // ["Watermelon"]