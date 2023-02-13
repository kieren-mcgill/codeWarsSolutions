//needle in a haystack (8 kyu)

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


Two Sum (6 kyu)

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

Double char (8 kyu)

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


//Difference of volume of cuboids

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
}


//Regex validate PIN code

function validatePIN (pin) {
  return /^([0-9]{4}|[0-9]{6})$/.test(pin)
}


