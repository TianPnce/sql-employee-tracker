DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  department VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE CASCADE
);
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_db)
  REFERENCES roles(id)
  ON DELETE CASCADE,
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employees(id)
  ON CASCADE DELETE
);