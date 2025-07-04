# Bakery Backend

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure MySQL Database:**
   - Create a database named `bakery` in MySQL Workbench.
   - Create a `users` table:
     ```sql
     CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       email VARCHAR(255) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL
     );
     ```
   - Copy `.env.example` to `.env` and fill in your MySQL credentials.

3. **Run the backend server:**
   ```bash
   npm start
   ```
   The server will run on http://localhost:3001

## API Endpoints

- `POST /api/signup` — Register a new user
- `POST /api/login` — Login with email and password 