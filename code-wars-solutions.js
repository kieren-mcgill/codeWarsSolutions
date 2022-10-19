//needle in a haystack (8 kyu)

function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}

//The highest profit wins!

const minMax = (arr) => [(Math.min.apply(null, arr)), (Math.max.apply(null, arr))];
console.log(minMax([1, 6, 10, 45]));
