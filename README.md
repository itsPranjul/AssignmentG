 # Gen AI Analytics Query API

This project is a lightweight backend service simulating a simplified version of a Gen AI Analytics tool. It allows non-technical users to ask complex business questions in natural language and receive structured insights.

## Features
- Process natural language queries into pseudo-SQL.
- Explain how the query is interpreted.
- Validate whether the query can be processed.
- Lightweight authentication for secure API access.
- Uses SQLite for mock database responses.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: SQLite (In-memory or file-based storage)

## Installation

### Prerequisites
- **Node.js** (v14+ recommended)
- **SQLite3**

### Steps to Set Up Locally
```bash
# Clone the repository
git clone <repo-url>
cd <project-folder>

# Install dependencies
npm install

# Initialize SQLite database
mkdir db && touch db/database.sqlite

# Start the server
node server.js
```

## API Endpoints

### 1. **Authentication**
This API uses a basic token-based authentication. Pass the following header in requests:
```json
Authorization: Bearer secret-token
```

### 2. **Process a Query**
- **Endpoint**: `POST /query`
- **Description**: Converts a natural language query into structured data.
- **Request Body**:
  ```json
  {
    "query": "What is the total sales?"
  }
  ```
- **Response**:
  ```json
  {
    "result": { "total_sales": 5000 }
  }
  ```

### 3. **Explain Query**
- **Endpoint**: `POST /explain`
- **Description**: Returns an explanation of how the query is processed.
- **Request Body**:
  ```json
  {
    "query": "What is the total sales?"
  }
  ```
- **Response**:
  ```json
  {
    "explanation": "This query calculates the total sales from all orders."
  }
  ```

### 4. **Validate Query**
- **Endpoint**: `POST /validate`
- **Description**: Checks if the query is feasible.
- **Request Body**:
  ```json
  {
    "query": "What is the total sales?"
  }
  ```
- **Response**:
  ```json
  {
    "valid": true
  }
  ```

### 5. **Root Endpoint**
- **Endpoint**: `GET /`
- **Description**: Displays a welcome message.
- **Response**:
  ```json
  "Welcome to the Gen AI Analytics Query API"
  ```

## Deployment (Render)
 [Render](https://assignmentg.onrender.com/)

## Testing the API
Use tools like **Postman**, **cURL**, or **Thunder Client** to send requests. Example cURL request:
```bash
curl -X POST "<your-render-url>/query" -H "Authorization: Bearer secret-token" -H "Content-Type: application/json" -d '{"query": "What is the total sales?"}'
```


