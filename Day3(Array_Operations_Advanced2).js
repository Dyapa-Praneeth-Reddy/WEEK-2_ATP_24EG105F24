// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"\


const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
    ];

    

// Task 1: filter() students who passed (marks >= 40)
const passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);


// Task 2: map() to add a grade field (>=90 -> A, >=75 -> B, >=60 -> C, else -> D)
const studentsWithGrades = students.map(student => {
    let grade;
    if (student.marks >= 90) {
        grade = 'A';
    } else if (student.marks >= 75) {
        grade = 'B';
    } else if (student.marks >= 60) {
        grade = 'C';
    } else {
        grade = 'D';
    }
    return { ...student, grade };
});
console.log("Students with Grades:", studentsWithGrades);


// Task 3: reduce() to calculate average marks
const totalMarks = students.reduce((total, student) => total + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);


// Task 4: find() the student who scored 92
const studentWith92Marks = students.find(student => student.marks === 92);
console.log("Student with 92 Marks:", studentWith92Marks);


// Task 5: findIndex() of student "Kiran"
const kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log("Kiran Index:", kiranIndex);

    

