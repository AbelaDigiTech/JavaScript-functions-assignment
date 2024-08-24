/*
This JavaScript function, finds from a given array of numbers, all possible numbers that can be paired to sum up to a 
given target number.
*/

function possibleSumOfNumbers(target, numbers) {
    let result = [];

    function findCombination(current, startIndex, remainingTarget) {
        if (remainingTarget === 0) {
            result.push([...current]);
            return;
        }

        for (let i = startIndex; i < numbers.length; i++) {
            if (numbers[i] <= remainingTarget) {
                current.push(numbers[i]);
                findCombination(current, i + 1, remainingTarget - numbers[i]);
                current.pop(); // Backtrack
            } else if (numbers[i] > remainingTarget) {
                current.push(numbers[i]);
                findCombination(current, i + 1, remainingTarget - numbers[i]);
                current.pop(); // Backtrack
            }
        }
    }

    findCombination([], 0, target);
    return result;
}

// Using The Above Function:
let target = 5;
let numbersArray = [1, 3, 5, -3, 2, 4];
let result = possibleSumOfNumbers(target, numbersArray);
console.log(result); // Output: [[1, 4], [3, 2], [5, -3, 3]]