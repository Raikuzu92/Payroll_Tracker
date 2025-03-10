// Get a reference to the #add-employees-btn element

const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const employeesArray = [];

const collectEmployees = function() {
  let keepGoing = true;
  while (keepGoing) {
 
    // TODO: Get user input to create and return an array of employee objects
  
    const firstName = prompt('Please enter the Employees first name');
    const lastName = prompt('Please enter the Employees last name');
    let salary = prompt('Please enter the Employees salary');

    //employees data turns in single object 
    const employees = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    // pushes employees object into employeesArray
    employeesArray.push(employees);

    keepGoing = confirm("Would you like to add another employee?");
    // "OK" = true, "Cancel" = false
    
    
  }
  return employeesArray;

  
};


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let avTotal = 0;
const numberEmployees = employeesArray.length;

for(const employee of employeesArray) {
  avTotal+= employee.salary;
}

console.log(avTotal);
console.log(numberEmployees);

const avgSalary = avTotal / numberEmployees;
console.log(`Your employees has an average of ${avgSalary} dollars!`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  
  console.log (`Congradulations to ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winnner!`)
  
  // TODO: Select and display a random employee

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
