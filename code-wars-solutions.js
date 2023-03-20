//A needle in a haystack (8 kyu)

function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}


//The highest profit wins (7 kyu)

const minMax = (arr) => [(Math.min.apply(null, arr)), (Math.max.apply(null, arr))];


//Remove the minimum(7 kyu)

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  } else for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === Math.min(...numbers)) {
  const newList = numbers.slice(0, i).concat(numbers.slice(i+1, numbers.length));
    return newList
  }
 }
}

//Area or perimater(8 kyu)

const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
}


//Check for factor
function checkForFactor (base, factor) {
  return base % factor === 0 ? true: false;
}


//What is between

function between(a, b) {
  // your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  } return arr;
}


//Smallest integer

class SmallestIntegerFinder {
findSmallestInt (args) {
    return args.sort(function(a, b){return a-b})[0];
  }
}


//Two Sum (6 kyu)

function twoSum(numbers, target) {
  let twoNumbers = [];
  for (let i=0; i<=numbers.length; i++) {
    for (let j=i+1; j<=numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}


//Bubble sort once (7 kyu)

function bubblesortOnce(a) {
  let newA = [...a]
  for (let i = 0; i <= newA.length - 1; i++) {
    if (newA[i] > newA[i + 1]) {
      let b = newA[i]
      newA[i] = newA[i + 1]
      newA[i + 1] = b
    }
  } return newA
}


//Abbreviate a two word name (8 kyu)

function abbrevName(name){
   let nameArray = name.split(" ");
     return `${nameArray[0][0].toUpperCase()}.${nameArray[1][0].toUpperCase()}`
}

//Are they the same? (6 kyu)

function comp(array1, array2){
  return array1.map(a => a*a).sort((a, b) => a - b).every((a, b) => a === array2.sort((a, b) => a - b)[b]);
}

//Sentence smash (8 kyu)

function smash (words) {
   return words.join(' ');
};


//Keep up the hoop (8 kyu)

function hoopCount (n) {
   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";    
}


//The supermarket queue (6 kyu)

function queueTime(customers, n) {
  let tills = [];
  for (let i = 1; i <= n; i++) {
    tills.push(0);
  } 
 for (let j = 0; j < customers.length; j++) {
   tills[tills.indexOf(Math.min(...tills))] += customers[j];
 }
  return tills.sort((a, b) => b - a)[0];
}


//Categorise new member

function openOrSenior(data){
  let memberCat = [];
  data.forEach(member =>  member[0] >= 55 && member[1] > 7 ? 
  memberCat.push("Senior") : memberCat.push("Open"));
  return memberCat;
}

//Double char (8 kyu)

function doubleChar(str) {
  return str.split('').map(a => `${a}${a}`).join('')
}



//Highest and lowest (7 kyu)

function highAndLow(numbers){
  let numArr = numbers.split(" ").map(str => +str);
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}


//Find the middle array (7kyu)

function gimme (triplet) {
return (triplet.indexOf([...triplet].sort((a, b) => a - b)[1]));
}

//Make a function that does arithmetic! (7 kyu)

function arithmetic(a, b, operator){
  switch(operator) {
      case 'add':
      return a + b;
      case 'subtract':
      return a - b;
      case 'multiply':
      return a * b;
      case 'divide' :
      return a /b;
  }
}


//Difference of volume of cuboids (7 kyu)

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
}


//Regex validate PIN code (7 kyu)

function validatePIN (pin) {
  return /^([0-9]{4}|[0-9]{6})$/.test(pin)
}

//Cockroach (8 kyu)

function cockroachSpeed(s) {
  return Math.floor(s * 1000 / 36)
}

//Removing elements (8 kyu)

function removeEveryOther(arr){
  return arr.filter((a, b) => b % 2 === 0)
}


//Fake binary code (8 kyu)

function fakeBin(x){
return [...x].map(a => a < 5 ? '0' : '1').join('');
}


//Convert number to reversed array of digits

function digitize(n) {
  return n.toString().split('').reverse().map(Number)
}


//Reverse words (7 kyu)

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}


//Get middle character
function getMiddle(s)
{
  let arr = [...s]
  if (arr.length % 2 === 1) {
    return s[(arr.length - 1)/2]
  } else {
    return [s[arr.length/2-1], s[arr.length/2]].join('')
  }
}


//Mistakes in character recognition software (7 kyu)

function correct(string)
{
	const error = {'0': 'O', '5': 'S', '1': 'I'}
  return [...string].map(el => el.replace(/[0-9]/g, error[el])).join('')
}

//Difference between any -ve or +ve intergers (n/a)

function getSum(a, b)
{
  return a && b ? Math.abs(a - b) : a || b ? Math.abs(a) + Math.abs(b) : Math.abs(a - b)
}

//Multiplication table (6 kyu)

multiplicationTable = function(size) {
  let table = []
for (let i = 1; i <= size; i++) {
  table.push(Array.from({length: size}, (value, index) => (index + 1)*i))
}
  return table;
}

//Beginner Series #3 Sum of Numbers (7 kyu)

function getSum(int1, int2)
{
  let sorted = [int1, int2].sort((a, b) => a - b)
  let allIntegers = []
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    allIntegers.push(i)
  } return allIntegers.reduce((a, b) => a + b)
}


//Simple multiplication (8kyu)

function simpleMultiplication(number) {
  return number % 2 === 0 ? number*8 : number *9
}


//Number of people in the bus (7 kyu)

function simpleMultiplication(number) {
  return number % 2 === 0 ? number*8 : number *9
}


//Remove first and last characters (8 kyu)

function removeChar(str){
  return str.slice(1, str.length - 1)
 
 };


 //Write number in expanded form (6 kyu)

 function expandedForm(num) {
  let arr = String(num).split('')
  return expArr = arr.map((el, i) => el * Math.pow(10, arr.length - i - 1))
  .filter(el => el > 0).join(' + ')
}


//Mexican Wave (6 kyu)

function wave(str){
  let result = []
  for (let i = 0; i <= str.length -1; i++) {
    result.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1))
  } return result.filter(el => /[A-Z]/g.test(el))
}


//Narcisistic numbers (6 kyu)

function narcissistic(val) {
  let result = [...val.toString()]
    .map((el, i, arr) => Math.pow(el, arr.length))
    .reduce((a, b) => a + b)
  return val === result
}


//Sum of a sequence (7 kyu)

const sequenceSum = (begin, end, step) => {
  let arr = []
 if (begin < end) {
   for (let i = begin; i <= end; i +=step) {
    arr.push(i)
  } return arr.reduce((a, b) => a + b)
 } return 0
};

 //Replace with alphabet position (6 kyu)

 function alphabetPosition(text) {
  return [...text.replace(/[^a-z]/gi, '').toUpperCase()]
    .map((el) => el.charCodeAt(0) - 64).join(' ')
}

//Find the capitals (7 kyu)

var capitals = function (word) {
  let arr = [...word];
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (/[A-Z]/.test(arr[i])) {
      result.push(i);
    }
  } return result;
}


// Unique in order (6kyu)

var uniqueInOrder=function(iterable){
  return [...iterable].filter((el, i, arr) => el !== arr[i + 1]); 
}

// Rot13 (5 kyu)

function rot13(message){
    const arr = [];
    for (let i = 0; i < message.length; i++) {
        const cCode = message.charCodeAt(i);
        cCode >= 97 && cCode <= 109 ||
        cCode >= 65 && cCode <= 77 ?
            arr.push(cCode + 13) :
            cCode >= 110 && cCode <= 122 ||
            cCode >= 78 && cCode <= 90 ?
                arr.push(cCode - 13) :
                arr.push(cCode);
    } return arr.map(code => String.fromCharCode(code)).join('');
}

// Multiples of 3 of 5 (6 kyu)

function solution(n){
    if (n > 3) {
        return Array.from({ length: n-1 }, (v, i) => i+1)
            .filter(v => v%3 === 0 || v%5 === 0)
            .reduce((a, b) => a + b);
    } else {
        return 0;
    }
}

//Add length (8 kyu)

function addLength(str) {
    return str.split(" ").map((el, i) => `${el} ${(el.length)}`);
}

//Counting sheep... (8 kyu)
function countSheep(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep).length;
}

//A feast of many beasts (8 kyu)

function feast(beast, dish) {
    return beast.charAt(0) === dish.charAt(0) &&
        beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1);
}

//Welcome! (8 kyu)

function greet(language) {
    const welcomeTrans = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    return welcomeTrans[language] || welcomeTrans.english;
}

//Find the first non-consecutive number (8kyu)

function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== 1) {
            return arr[i];
        }
    }return null;
}

//Super Duper Easy (8 kyu)
function problem(x){
    if (typeof x === "number") {
        return (x*50) + 6;
    } else {
        return "Error";
    }
}

// 5 without numbers (8 kyu)

function unusualFive() {
    return "abcde".length;
}

//Two to one (7kyu)
function longest(s1, s2) {
    return [...(s1 + s2)]
        .sort()
        .filter((el, i, arr) => el !== arr[i+1])
        .join('')
}

//Is this a triangle? (7 kyu)

function isTriangle(a,b,c)
{
    return  a + b > c && b + c > a && a + c > b;
}

//The wide mouthed frog! (8 kyu)

function mouthSize(animal) {
    return animal === "alligator" ? "small" : "wide";
}

//Remove string spaces (8kyu)

function noSpace(x){
    return [...x].filter(a => a !==' ').join('')
}

//Anagram detection (7 kyu)
var isAnagram = function(test, original) {
    return [...test.toLowerCase()].sort().join('')
        === [...original.toLowerCase()].sort().join('');
};

 //Factorial (7 kyu)

function factorial(n)
{
    const arr = [];
    if (n === 0) {
        return 1
    } else if (n < 0 || n > 12) {
        throw new RangeError('Range Error');
    } else {
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        return arr.reduce((a, b) => a*b);
    }
}

