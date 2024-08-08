function sortStudentsByCondition(students, conditionFn) {
    return students.sort(conditionFn);
}

// Example usage:
const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 },
];

function sortByAgeDescending(a, b) {
    return b.age - a.age; 
}

const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
console.log(sortedStudents);
