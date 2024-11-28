// aline and eric
function sumOfArray(numbers) {
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  

  let array1 = [1, 2, 3, 4, 5];
  console.log("Sum of array1:", sumOfArray(array1)); // Output: 15
  
 
  let array2 = [-1, 2, -3, 4, 5];
  