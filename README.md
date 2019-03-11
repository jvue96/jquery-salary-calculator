# Weekend Challenge: jQuery Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. 

For Base mode === it does **not** need to remove that Employee's salary from the reported total.


To do list
// add functionality to delete button 
// Calculate monthly costs and append to DOM
// if totaly monthly costs > $20,000 = red background color to total monthly costs, append to the dom 


function appendTotalSalariesHeader () {
    let totalSalariesHeader = $('<h2> Total Cost: </h2>')
    $('.totalSalariesDiv').append(totalSalariesHeader);
} // end appendTotalCostHeader




Completed list 
// Create a submit button
// On click, append user inputs to the DOM 
    1) first name 2)last name 3)id 4)job title 5) salary
// Clear input fields after clicking submit. 
// Create a delete button that removes an employee from the DOM. (nest delete button into submit button row?)
// Calculate monthly costs and append to DOM


Bugs identified - NEED TO FIX 
// Although the table format seems to look equal when new users inputs are appended onto the DOM, if any characters exceed the width the cell/row breaks from the set height & width in css. 


### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 
