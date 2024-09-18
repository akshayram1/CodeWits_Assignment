# CodeWits_Assignment
# Job Listing Portal - Backend

This project is a backend implementation of a job listing portal where companies can post job openings, and candidates can view and apply for these jobs. The application supports two roles: Company and Candidate, each with its own set of permissions. Authentication is handled using JSON Web Tokens (JWT), and MongoDB is used for data storage.

## Features

- **User Roles**:
  - **Company**: Can create, update, delete, and view job postings.
  - **Candidate**: Can view job postings and apply for jobs.
- **Job Posting API**: Allows companies to create, update, retrieve, and delete job postings.
- **Application API**: Allows candidates to apply for jobs and companies to view received applications.
- **JWT Authentication**: Secure token-based authentication for both companies and candidates.
- **MongoDB**: Used for storing user, job, and application data.
- **Input Validation & Error Handling**: Ensures data integrity and security.
- **Testing**: Unit tests using tools like Mocha or Jest.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Framework for building the RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT (jsonwebtoken)**: For authentication.
- **Postman**: For API testing.
- **dotenv**: For managing environment variables.
- **bcrypt**: For secure password hashing.
- **Mocha/Jest**: For unit testing.

## Installation and Setup

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or cloud instance)
- [Postman](https://www.postman.com/) (for testing the APIs)

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/job-listing-portal.git
cd job-listing-portal
```
### 3. Install Dependencies

```
bash
```


`npm install`
### 4. Environment Variables
Create a `.env` file in the root of the project and add the following variables:

```
env
```


`PORT=3000 MONGODB_URI=mongodb://localhost:27017/job_portal JWT_SECRET=your_jwt_secret_key`
* **PORT**: The port number the server will listen to.
* **MONGODB_URI**: Connection string for the MongoDB instance.
* **JWT_SECRET**: A secret key used for signing JWT tokens.
### 5. Start the Server

```
bash
```


`npm start`
You should see a message in the console: `Server running on port 3000`.

### 6. Testing with Postman
* **Authentication**:
   * **Register**: `POST http://localhost:3000/auth/register`
   * **Login**: `POST http://localhost:3000/auth/login`
* **Job Management (Company)**:
   * **Create Job**: `POST http://localhost:3000/jobs`
   * **Update Job**: `PUT http://localhost:3000/jobs/`
   * **Delete Job**: `DELETE http://localhost:3000/jobs/`
   * **Get All Jobs**: `GET http://localhost:3000/jobs`
* **Application Management (Candidate)**:
   * **Apply for Job**: `POST http://localhost:3000/applications//apply`
   * **View Applications** (Company): `GET http://localhost:3000/applications`
**Note**: Use the JWT token in the `Authorization` header as `Bearer ` for protected routes.
### 7. API Usage Examples
### 1. Register (User Creation)


json
```


`POST /auth/register { "name": "John Doe", "email": "johndoe@example.com", "password": "password123", "role": "Company" }`

```
2. Login (Retrieve JWT Token)


json
```


`POST /auth/login { "email": "johndoe@example.com", "password": "password123" }`

```

3. Create Job (Company Role)


json
```

`POST /jobs Headers: { "Authorization": "Bearer " } Body: { "title": "Software Engineer", "description": "Develop software applications.", "location": "Mumbai", "salary": 60000 }`

```

4. Apply for Job (Candidate Role)


json
```


`POST /applications//apply Headers: { "Authorization": "Bearer " } Body: { "resume": "https://example.com/resume.pdf" }`

```


Running Tests
To run unit tests, use:


bash
```
`npm test`

```
