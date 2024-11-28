// Aline and eric
const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 78 },
    { name: "Charlie", age: 19, grade: 92 },
    { name: "Diana", age: 21, grade: 60 },
    { name: "Eve", age: 20, grade: 88 }
  ];
  
  
  function getStudentsAboveGradeThreshold(students, threshold) {
    const filteredStudents = students.filter(student => student.grade > threshold);
    return filteredStudents.map(student => student.name);
  }
  const result = getStudentsAboveGradeThreshold(students, 80);
  console.log("Students with grade above 80:", result); // Output: ["Alice", "Charlie", "Eve"]
  const result2 = getStudentsAboveGradeThreshold(students, 70);
  console.log("Students with grade above 70:", result2); // Output: ["Alice", "Bob", "Charlie", "Eve"]
  