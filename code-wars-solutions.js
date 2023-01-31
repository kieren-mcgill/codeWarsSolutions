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
