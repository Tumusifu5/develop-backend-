// eric and aline
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  
  let test1 = "hello";
  console.log("Reversed string 1:", reverseString(test1)); // Output: "olleh"
  let test2 = "JavaScript is fun";
  console.log("Reversed string 2:", reverseString(test2)); // Output: "nuf si tpircSavaJ"g
  let test3 = "A";
  console.log("Reversed string 3:", reverseString(test3)); // Output: "A"
  let test4 = "";
  console.log("Reversed string 4:", reverseString(test4)); // Output: ""
  