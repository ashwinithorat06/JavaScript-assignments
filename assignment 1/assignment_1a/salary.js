//get employee name from user
var employeeName = prompt("Enter employee name", "Employee name");

//get employee id from user
var employeeId = Number(prompt("Enter employee id", "Employee id"));

//get salary amount from user
var employeeSalary = Number(prompt("Enter employee salary", "Employee salary"));

//calculate gross salary
var grossSalary = employeeSalary + (0.15 * employeeSalary) + (0.35 * employeeSalary);

//display name, id and gross salary of employee
document.write("Employee Name : " + employeeName);

document.write("<br>Employee Id : " + employeeId);

document.write("<br>Gross Salary : " + grossSalary);