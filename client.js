$(document).ready(readyNow);

// global variables 
let newEmployeeArray = [];


function readyNow () {
    appendEmployees();
    appendMonthlyCostsHeader();
    deleteButton();
} // end readyNow


function deleteButton () {
$('#employeeTable2').on('click', '.deleteButton', deleteButton1)
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
    console.log(newEmployee.first);
    console.log(newEmployee.last);
    console.log(newEmployee.title);
    console.log(newEmployee.id);
    console.log(newEmployee.salary);
    
    
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
                <td> <button class = "deleteButton">Delete</button> </td>
                </tr>`);
            
    } // end for of loop  
} // end displayNewEmployee

function deleteRow () {
$('.deleteButton').remove();
} // end deleteRow 

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);

} // end appendEmployees

    // functions for monthly costs and salaries
function appendMonthlyCostsHeader () {
    let monthlyCostsHeader = $('<h2> Monthly Costs <h2>');
    $('#employeeTable2').append(monthlyCostsHeader);
} // end appendMonthlyCostsHeader


 /* // add employee salaries together 
 // TODO how can I manipulte newEmployee.salary since it's not access through global variable? 
 function calculateSalaries () {
     let calculation = newEmployee.salary + newEmployee.salary[i]
    
     let totalSalariesHeader = $(`<h3> Total Salaries: ${calculation}</h3>`);
     $('.totalSalariesDiv').append(totalSalariesHeader);

   } // end calculateSalaries
   

 */



// checkbox syntax
// <input type="checkbox"></input>


// append monthly costs <h2> to the DOM 