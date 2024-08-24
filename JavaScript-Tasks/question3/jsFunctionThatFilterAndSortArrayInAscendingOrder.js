/*
This is a JavaScript function that filters out non-number elements from an array and then sorts the remaining numbers in
ascending order.
*/

function filterAndSortArray(arr) {
    // Filter out elements that are not numbers
    let filteredArray = arr.filter(element => typeof element === 'number');

    // Sort the filtered array in ascending order
    filteredArray.sort((a, b) => a - b);

    return filteredArray;
}

// Example usage:
let mixedArray = [5, 10, 1, 2, 3, "Number", { size: 12 }, '6'];
let sortedNumbers = filterAndSortArray(mixedArray);
console.log(sortedNumbers);