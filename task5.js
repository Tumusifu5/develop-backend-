// aline and eric
function calculator() {
    let operation = prompt("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\nEnter the operation number (1-3):");
  

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
  
    
    switch(operation) {
      case "1":
        result = num1 + num2;
        console.log("Result: " + num1 + " + " + num2 + " = " + result);
        break;
      
      case "2":
        result = num1 - num2;
        console.log("Result: " + num1 + " - " + num2 + " = " + result);
        break;
        
      case "3":
        result = num1 * num2;
        console.log("Result: " + num1 + " * " + num2 + " = " + result);
        break;
        
      default:
        console.log("Invalid operation. Please choose 1, 2, or 3.");
        break;
    }
  }
  
 
  calculator();
  