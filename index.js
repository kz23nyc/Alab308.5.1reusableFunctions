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


//======================================================================================

// //Part 2: Thinking Methodically

// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// For the tasks below, use the following data to test your work:

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age. 

const sortedByAge = data.slice().sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log(sortedByAge);

// Use the sort method to sort the array by age in ascending order.
// The slice method is used to create a shallow copy of the array to avoid mutating the original array.


// Filter the array to remove entries with an age greater than 50.

const filteredByAge = sortedByAge.filter(person => parseInt(person.age) <= 50);
console.log(filteredByAge);

// Use the filter methodto create a new array with individuals older than 50.The callback function checks if the age of each person is greater than 50.


// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedArray = filteredByAge.map(person => ({
  id: person.id,
  name: person.name,
  job: person.occupation,
  age: (parseInt(person.age) + 1).toString()
}));
console.log(mappedArray);

// Use the map() method to create a new array Creates a new array with the result of calling a function for each array element. The callback function returns a new object with the updated keys and values.

// Use the reduce method to calculate the sum of the ages.
const totalAge = mappedArray.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log(totalAge);

// reduce () method is used to reduce the array to a single value.
// (sum, person), sum is the accumulator that stores the accumulated result, person is the current element being processed in he array.
// parseInt(person.age) converts the age property of the current person objectfrom a string to a number.
// sum + parseInt(person.age) adds the converted age to the accumulator sum.
// The initial value 0 is provided as the second argument to reduce(), which means the accumulation starts from 0.

const averageAge = totalAge / mappedArray.length;
console.log(averageAge);
// Calculate the average age by dividing the total age by the length of the mapped array.


// Then use the result to calculate the average age.