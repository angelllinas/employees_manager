# Technical Manual - Employee Management System

### Table of Contents

* Introduction.
* System architecture.
* Used technology.
* Development Environment Configuration.
* Project Structure.
* Unit and Integration Tests.
* System Deployment.

---

### Introduction

This technical manual provides detailed information on the architecture, technologies and processes used in the development of the Employee Management System.

### System Architecture

The system follows a three-layer architecture:

**Presentation Layer:**

* User interface accessible through a web browser.
* Developed using standard web technologies such as HTML, CSS and JavaScript.

**Business Logic Layer:**

* Implemented with Node.js and Express.js.
* Use Sequelize as an ORM to interact with the database.

**Data Layer:**

* Data storage managed by a relational database.
* Sequelize is used for model definition and interaction with the database.

### Technologies Used

* **Node.js and Express.js:** Server platform and framework for the business logic layer.
* **Sequelize:** ORM for interaction with the relational database.
* **Jest:** Testing framework for unit testing.
* **Supertest:** Library to perform integration tests on the API.
* **Express Validator:** Middleware for data validation in HTTP requests.

### Development Environment Configuration

**Installation of Dependencies:**

* Run `npm install` in the project root to install the dependencies.

**Database Configuration:**

* Edit the Sequelize configuration file `config/database.js` to adjust the credentials and database settings.

### Project Structure

**The project follows a common directory structure:**

* **src:** Contains the system source code.
* **config:** Configuration files, such as database configuration.
* **tests:** Directory for unit and integration tests.
* **docs:** Directory for documents files on the documentation of project.  

### Unit and Integration Tests

**Unit Tests (*Jest*):**

* Unit tests are located in the `tests/unit` directory. 
* They focus on testing low-level functions and logic.
* Run with `npx jest /test/unit`.

**Integration Tests (*Supertest*):**

* Integration tests are located in the tests/integration directory.
* They focus on testing the interaction of the API with HTTP requests.
* Run with `npx jest test/e2e`.

### System Deployment

**Production environment configuration:**

* Adjust Docker devcontainer configuration.

**Deployment on a Server:**

* Set up a supported Node.js server (such as PM2) to run the application in production.
* Configure a web server (such as Nginx or Apache) as a reverse proxy.
