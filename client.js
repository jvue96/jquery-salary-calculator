$(document).ready(appendEmployees);

// global variables 
let newEmployeeArray = [];


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
console.log(`in displayNewEployee function`, );

let el = $('#employeeTable2');
el.empty();

    // loop through the newEmployeeArray
    for(let employee of newEmployeeArray) {
   
    // NOTE appended to  <td> id = "employeeRow"
    el.append(` <tr id = "employeeRows">
                <td id = "rows">${employee.first}</td>
                <td id = "rows">${employee.last}</td>
                <td id = "rows">${employee.id}</td>
                <td id = "rows">${employee.title}</td>
                <td id = "rows">${employee.salary}</td>
                </tr>`);
            
    } // end for of loop  
} // end displayNewEmployee

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);
} // end appendEmployees

