// Aline and eric
const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 78 },
    { name: "Charlie", age: 19, grade: 92 },
    { name: "Diana", age: 21, grade: 60 },
    { name: "Eve", age: 20, grade: 88 }
  ];

const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames); 
const studentsWithStatus = students.map(student => ({
    ...student,
    status: student.grade >= 70 ? "Passed" : "Failed"
  }));
  
  console.log("Students with Status:", studentsWithStatus);
 
const passedStudents = students.filter(student => student.grade >= 70);
console.log("Students who passed:", passedStudents);

const olderStudents = students.filter(student => student.age > 21);
console.log("Students older than 21:", olderStudents); 

const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
console.log("Total Grade:", totalGrade); 
const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average Grade:", averageGrade); 
const averagePassedGrade = students
  .filter(student => student.grade >= 70) 
  .reduce((sum, student) => sum + student.grade, 0) 
  / students.filter(student => student.grade >= 70).length; ts

console.log("Average Grade of Passed Students:", averagePassedGrade); 
    