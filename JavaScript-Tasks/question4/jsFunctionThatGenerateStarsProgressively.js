/*
This is a JavaScript function developed to generate stars in the output field, starting from 1 star and increasing to 
the maximum number specified:
*/

function generateStars(max) {
    let output = '';  // Initialize an empty string to store the star pattern
    
    // Loop from 1 to the maximum number
    for (let i = 1; i <= max; i++) {
        // Add 'i' stars to the output string followed by a new line
        output += '*'.repeat(i) + '\n';
    }

    // Display the result in the console
    console.log(output);
}

// Example usage:
generateStars(3);