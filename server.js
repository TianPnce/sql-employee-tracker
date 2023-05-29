const consoleTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the department_db database.`)
);

startApp();

function startApp(){
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
        'View all roles',
        'Add a role',
        'View all employees',
        'Add an employee',
        'Update an employee role',
        'Quit'
      ]}
  ])
  .then((res) => {
    if(res.option === 'View all departments'){
      console.log('Departments')
      db.query('SELECT * FROM `departments`', function (err, results){
        if(err){console.log("error");
      } else {
        console.table(results);
      }
      startApp();
    });
  }
  else if(res.option === 'View all roles'){
    console.log('Roles')
    db.query(`SELECT * FROM roles
    JOIN departments
    ON roles.department_id = departments.id;`, function (err, results){
      if(err){
        console.log("error");
      } else {
        console.table(results);
      }
      startApp();
    });
  }
  else if(res.option === 'View all employees'){
    console.log('Employees')
    db.query(`SELECT * FROM employees
    LEFT JOIN roles
    ON employees.role_id = roles.id;`, function (err, results){
      if(err){
        console.log("error");
      } else {
        console.table(results);
      }
      startApp();
    });
  }
  else if(res.option === 'Add a department'){
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the department?',
        name: "department"
      }
    ])
    .then((res) => {
      console.log('Success! Added', res.department)
      db.query(`INSERT INTO departments (department) 
      VALUES(?)`, res.department);
      startApp();
    });
  }
  else if(res.option === 'Add a role'){
    const options = [];
    db.query('SELECT * FROM departments', (err,res) => {
      if (err) throw err;
      dept = res.map((department) => {
        return {
          name: department.name,
          id: department.id,
        }
      })
      options.push(dept)
    })
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the role?',
        name: "title"
      },
      {
        type: 'input',
        message: 'What is the salary of the role?',
        name: "salary"
      },
      {
        type: 'list',
        message: 'Which department does the role belong to?',
        name: "department_id",
        choices: options
      }
    ])
    .then((res) => {
      console.log('Success! Added', res.role)
      db.query(`INSERT INTO roles (title, salary, department_id) 
      VALUES(?)`, res.title, res.salary, res.department_id);
      startApp();
    });
  }
  else if(res.option === 'Add an employee'){
    inquirer.prompt([
      {
        type: 'input',
        message: "Enter Employee's first name",
        name: "first"
      },
      {
        type: 'input',
        message: "Enter Employee's last name",
        name: "last"
      },
      {
        type: 'input',
        message: "Enter Role ID Number",
        name: "role_id"
      },
      {
        type: 'input',
        message: "Enter Manager ID (Null if not applicable)",
        name: "manager_id"
      }
    ])
    .then((res) => {
      console.log('Success! Added', res.first)
      db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) 
      VALUES(?)`, res.first, res.last, res.role_id, res.manager_id);
      startApp();
    });
  }
  else if(res.option === 'Update an employee role'){
    console.log('Update an employee role')
      }
      else if(res.option === 'Quit'){
        console.log('Bye')
      }
      else {
        console.error('error')
      }
  });
};

