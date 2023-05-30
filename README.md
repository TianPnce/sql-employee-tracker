# Sql: Employee Tracker

## Description
This application uses content management system (CMS), and that allows users to easily see and use everybody’s information. Users are able to see departments, roles, and employees. You are also able to add departments, roles, and employees when needed.

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Walkthrough 
[Screencastify](https://watch.screencastify.com/v/9LmI7Cm2AU6FRk24kw4r)


## Installation
- Run `npm i` to install dependencies 
- Start app by running `node server.js`

## Technologies
- Node
- SQL
- Inquirer
- JavaScript

## Notes
Issues I have with this application is that my employee table is not connecting, and I've spent a lot of time on it but could not figure out the issue. That is preventing me from adding employees and roles to a point.

## Questions
[TianPnce](https://github.com/TianPnce)
