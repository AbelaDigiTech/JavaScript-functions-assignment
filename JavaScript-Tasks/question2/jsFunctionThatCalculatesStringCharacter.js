/*
This is a JavaScript function that calculates the number of alphabets, digits, and symbols in a given string, like
"Hello World123!". The function outputs the counts of each character type contained in the string.
*/

function countCharacterTypes(str) {
    // Initialize counters for alphabets, digits, and symbols
    let alphabetCount = 0;
    let digitCount = 0;
    let symbolCount = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if the character is an alphabet
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            alphabetCount++;
        }
        // Check if the character is a digit
        else if (char >= '0' && char <= '9') {
            digitCount++;
        }
        // If it's not an alphabet or digit, count it as a symbol
        else {
            symbolCount++;
        }
    }

    // Output the counts
    console.log(`Alphabets: ${alphabetCount}`);
    console.log(`Digits: ${digitCount}`);
    console.log(`Symbols: ${symbolCount}`);
}

// Example usage:
let inputString = "HelloWorld123!";
countCharacterTypes(inputString);