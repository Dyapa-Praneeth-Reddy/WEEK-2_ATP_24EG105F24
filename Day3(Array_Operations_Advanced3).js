// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
    ];


// Task 1: filter() employees from IT department
const itEmployees = employees.filter(employee => employee.department === "IT");
console.log("IT Employees:", itEmployees);


// Task 2: map() to add: netSalary = salary + 10% bonus
const employeesWithNetSalary = employees.map(employee => ({
    ...employee,
    netSalary: employee.salary + (employee.salary * 0.10)
}));
console.log("Employees with Net Salary:", employeesWithNetSalary);


// Task 3: reduce() to calculate total salary payout
const totalSalaryPayout = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary Payout:", totalSalaryPayout);


// Task 4: find() employee with salary 30000
const employeeWith30000Salary = employees.find(employee => employee.salary === 30000);
console.log("Employee with 30000 Salary:", employeeWith30000Salary);


// Task 5: findIndex() of employee "Neha"
const nehaIndex = employees.findIndex(employee => employee.name === "Neha");
console.log("Neha Index:", nehaIndex);


