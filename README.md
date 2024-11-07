# DealsDray Machine Test

Welcome to the **DealsDray Machine Test** repository! This project is designed to showcase employee management functionality with a focus on employee creation, updates, deletion, authentication, and testing using Postman.

## Features

- **Employee List**: Fetch and display a list of all employees.
- **Employee Creation**: Add new employees with required fields like name, email, mobile number, gender, designation, etc.
- **Employee Update**: Edit employee data including name, email, and image upload.
- **Employee Deletion**: Delete employee records from the database.
- **Authentication**: Secure login functionality for users.

## Tech Stack

- **Frontend**: React.js, Vite, React-Toastify
- **Backend**: Express.js, Multer (for file uploads), JWT, bcrypt, Node.js, MongoDB
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Development Tools**: Node Mon, Postman

## API Testing with Postman

Below are the key API requests tested using **Postman**:

### 1. **GET Employee List**
Fetches the list of all employees.

![GET Employee List](https://github.com/user-attachments/assets/98c13e34-0afe-46e8-8927-b7dacf0eaa7d)

### 2. **POST Employee Creation**
Creates a new employee with necessary details such as name, email, mobile number, and gender.

![POST Employee Creation](https://github.com/user-attachments/assets/e6961d32-0a86-457c-9417-f44f87f3e031)

### 3. **PUT Employee Update**
Updates the existing employee data, including information like name, email, mobile number, and image upload.

![PUT Employee Update](https://github.com/user-attachments/assets/dbf723f8-76ca-46fa-a05f-9c4e463cde7d)

### 4. **DELETE Employee**
Deletes an employee from the database by employee ID.

![DELETE Employee](https://github.com/user-attachments/assets/35add9ae-831d-4ee4-8fe8-0d6a56079f76)

### 5. **Authentication**
Secures the employee endpoints using JWT authentication.

![Authentication](https://github.com/user-attachments/assets/3c96b04a-b620-49e8-8432-425e63baa46a)

## Git Graph - Proof of Original Work

Here’s a visual of the Git history to prove the work was done by me:

![Git Graph](https://github.com/user-attachments/assets/ad89e81c-9ab6-4ab4-8338-cdc8aa0241dd)

## MongoDB

This section displays the MongoDB collections with employee data.

![MongoDB](https://github.com/user-attachments/assets/fdaf35d3-eb43-4bfa-baa7-19cde0d49766)

## Project Setup

### 1. Clone the repository:


git clone https://github.com/yourusername/dealsdray-machine-test.git
cd dealsdray-machine-test

git clone https://github.com/yourusername/dealsdray-machine-test.git
cd dealsdray-machine-test
2. Install dependencies:
For the backend (Express):

cd backend
npm install
For the frontend (React with Vite):


cd frontend
npm install
3. Start the development servers:
Backend: Run the backend server using nodemon for auto-reloading:


cd backend
npm run dev
Frontend: Start the React development server using Vite:


cd frontend
npm run dev
4. Environment Variables
Create a .env file in the backend directory to configure your environment variables, such as your MongoDB URI and JWT secrets.
5. Run the Application
Once both servers are running, you can access the application in your browser at http://localhost:3000 (frontend).

Conclusion
This repository demonstrates the full-stack implementation of an employee management system, including employee data CRUD operations, authentication, and file upload handling. The use of Postman ensures that the API is well-tested, and MongoDB is used to persist employee data.

Feel free to contribute, report issues, or fork the repository!
