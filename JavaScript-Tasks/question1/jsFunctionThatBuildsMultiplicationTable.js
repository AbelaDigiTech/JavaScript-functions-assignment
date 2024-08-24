/*
This is a JavaScript function that generates multiplication table. It receive the number, 5, and builds a multiplication
table for every number from 1 to 5.
*/

function generateMultiplicationTable(num) {
    // Validate input
    if (isNaN(num) || num <= 0) {
      return "Invalid input. Please enter a positive number.";
    }
  
    // Create a table string
    let table = "";
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        table += `${i * j}\t`;
      }
      table += "\n";
    }
  
    return table;
  }
  
  // Using the function:
  const number = 5;
  const result = generateMultiplicationTable(number);
  console.log(result);