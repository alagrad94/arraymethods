
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// Sort the numbers in descending order (10, 9, 8, 7, etc).
const sortedIntegers = integers.sort(function(a, b){return b-a});
// console.log(sortedIntegers)

// Remove any integers greater than 19.
const smallIntegers = integers.filter(intNum => {
const smallNum = (intNum <= 19)
    return smallNum
})
// console.log(smallIntegers)

// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const multInt = smallIntegers.reduce((y = (smallIntegers.map(x => (x * 1.5) - 1)), next) => y + next);
// console.log(multInt)