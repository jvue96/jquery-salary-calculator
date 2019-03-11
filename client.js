$(document).ready(readyNow);

// global variables 
let newEmployeeArray = [];
let monthsInYear = 12; 
let monthlyCostCap = 20000;

function readyNow () {
    appendEmployees();
    deleteButton();
} // end readyNow


function deleteButton () {
    $('#employeeTable').on('click', '.deleteButton', deleteButton1)
function deleteButton1 () {
$(this).closest('tr').remove();
    }
} // end deleteButton 

// on click of submit button, appendAllInputs function will add a new employee with these inputs
function appendAllInputs () {
    let newEmployee = {
         first: firstName = $('#firstName').val(),
         last: lastName = $('#lastName').val(),
         id: employeeId = $('#idNumber').val(),
         title: title = $('#employeeTitle').val(),
         salary: salary = $('#annualSalary').val()
         
    } // end newEmployee
    console.log('Added Employee: ', newEmployee);
    // test to see if object calls work. it functions with user inputs created on the DOM 

    // put new objects into an array 
    newEmployeeArray.push(newEmployee);
    // empty user inputs after submit 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
    console.log('newEmployee array push', newEmployeeArray);

    // check if displayNewEmployee function works
    displayNewEmployee();
} // end appendAllInputs


// display new employee created onto the DOM
function displayNewEmployee  () {
let el = $('#employeeRows');
el.empty();

    // loop through the newEmployeeArray
    for(let employee of newEmployeeArray) {
   
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

function calculateTotalSalaries () {
let emptyMonthlyCosts = $('#totalSalaries');
emptyMonthlyCosts.empty();

let monthlyCosts = 0; 
for(let i = 0; i < newEmployeeArray.length; i++) {
    monthlyCosts += newEmployeeArray[i].salary / monthsInYear;
}  // end for loop 
    if (monthlyCosts > 20000){
} // end for statment
    console.log(monthlyCosts);
    $('#totalSalaries').append(monthlyCosts);

} // end calculateTotalSalaries

function deleteRow () {
$('.deleteButton').remove();
} // end deleteRow 

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);

} // end appendEmployees
