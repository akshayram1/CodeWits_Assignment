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
