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

