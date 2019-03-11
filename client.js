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

// on submit click, append delete button to each employee row 
function appendDeleteButton () {
let deleteThis = $('#deleteButtonDiv')
deleteThis.empty();
deleteThis.append(`<button type = "text" id = "deleteButton">Delete</button>`);
} // end appendDeleteButton

function appendMonthlyCosts () {
    let monthly = $('<h2> Monthly Costs </h2>')
    $('.MonthlyCostsDiv').append(monthly);
    
} // end appendMonthlyCosts function 

function deleteSelected () {
// if check box is checked, then delete the employee row 
if($this.prop('checked')) {
    $('#deleteButton').remove()
}
} // end deleteSelected


// display new employee created onto the DOM
function displayNewEmployee  () {
let el = $('#employeeTable2');
el.empty();

    // loop through the newEmployeeArray
    for(let employee of newEmployeeArray) {
   
    //appended to  <td> id = "employeeRow"
    el.append(` <tr id = "employeeRows">
                <td id = "rows">${employee.first}</td>
                <td id = "rows">${employee.last}</td>
                <td id = "rows">${employee.id}</td>
                <td id = "rows">${employee.title}</td>
                <td id = "rows">${employee.salary}</td>
                <td id = "rows"> <input type="checkbox" id = "deleteCheckBox"></input> </td>
                </tr>`);
            
    } // end for of loop  
} // end displayNewEmployee

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);
    $('#submitButton').on('click', appendDeleteButton);
    $('#submitButton').on('click', appendMonthlyCosts)
    // TODO add functionality to delete button 
    $('#deleteButton').on('click', deleteSelected)

} // end appendEmployees



// checkbox syntax
// <input type="checkbox"></input>


// append monthly costs <h2> to the DOM 