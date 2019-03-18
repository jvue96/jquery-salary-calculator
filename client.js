$(document).ready(readyNow);

// global variables
let newEmployeeArray = [];
let monthsInYear = 12;
let monthlyCostCap = 20000;

function readyNow() {
  appendEmployees();
  $("#employeeTable").on("click", ".deleteButton", deleteButton);
} // end readyNow

// append employee properties on sadubmit button click
function appendEmployees() {
  $("#submitButton").on("click", appendAllInputs);
} // end appendEmployees

// on click of submit button, appendAllInputs function will add a new employee with these inputs
function appendAllInputs() {
  let newEmployee = {
    first: $("#firstName").val(),
    last: $("#lastName").val(),
    id: $("#idNumber").val(),
    title: $("#employeeTitle").val(),
    salary: $("#annualSalary").val()
  }; // end newEmployee
  console.log("Added Employee: ", newEmployee);
  // test to see if object calls work. it functions with user inputs created on the DOM

  // put new objects into an array
  newEmployeeArray.push(newEmployee);
  // empty user inputs after submit
  $("#firstName").val("");
  $("#lastName").val("");
  $("#idNumber").val("");
  $("#employeeTitle").val("");
  $("#annualSalary").val("");
  console.log("newEmployee array push", newEmployeeArray);

  displayNewEmployee();
} // end appendAllInputs

// display new employee created onto the DOM
function displayNewEmployee() {
  let el = $("#employeeRows");
  el.empty();

  // loop through the newEmployeeArray
  for (let employee of newEmployeeArray) {
    //appended to  <td> id = "employeeRow"
    el.append(` <tr>
                    <td id = "rows">${employee.first}</td>
                    <td id = "rows">${employee.last}</td>
                    <td id = "rows">${employee.id}</td>
                    <td id = "rows">${employee.title}</td>
                    <td id = "rows">${employee.salary}</td>
                    <td> <button class = "deleteButton">Delete</button> </td>
                    </tr>`);
  } // end for of loop
  calculateTotalSalaries();
} // end displayNewEmployee

function calculateTotalSalaries() {
  let emptyMonthlyCosts = $("#totalSalaries");
  emptyMonthlyCosts.empty();

  let monthlyCosts = 0;
  for (let i = 0; i < newEmployeeArray.length; i++) {
    monthlyCosts += newEmployeeArray[i].salary / monthsInYear;
  } // end for loop
  if (monthlyCosts > monthlyCostCap) {
    $('#monthlyCostId').css('background', '#ff3300');

  } // end for statment
  console.log(monthlyCosts);
  $("#totalSalaries").append(monthlyCosts);
} // end calculateTotalSalaries

function deleteButton() {
  $(this)
    .closest("tr")
    .remove();
} // end deleteButton
