# Helpdesk API - Ticket System

## 📌 Description
This API was developed to manage a technical support system (Helpdesk), allowing the creation, consultation, updating, and deletion of users and tickets.

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **Swagger** (API documentation)
- **JSON** (local database)

## 📂 Estrutura do Projeto
```
/helpdesk-api
│── data/
│   ├── users.json       # User database
│   ├── tickets.json     # Ticket database
│── swagger.json         # Swagger documentation
│── index.js             # Main API file
│── package.json         # Project dependencies
│── README.md            # Project documentation
```

## 🔧 Installation and Execution
### 1️⃣ Clone the repository
```bash
git clone https://github.com/automacaohml/helpdesk-api.git
cd helpdesk-api
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Start the API
```bash
node server.js
```
The API will be running at `http://localhost:3000`

---
## 📌 API Endpoints
### **🔹 Users**
| Method  | Route          | Description |
|---------|--------------|------------|
| **GET**    | `/users`         | Lists all users |
| **GET**    | `/users/:id`     | Fetches a user by ID |
| **POST**   | `/users`         | Creates a new user |
| **PUT**    | `/users/:id`     | Updates user data |
| **DELETE** | `/users/:id`     | Deletes a user |

### **🔹 Tickets**
| Method  | Route                | Description |
|---------|----------------------|------------|
| **POST**   | `/tickets`            | Creates a new ticket |
| **GET**    | `/tickets/:id`        | Fetches a ticket by ID |
| **PUT**    | `/tickets/:id/status` | Updates ticket status |
| **DELETE** | `/tickets/:id`        | Deletes a ticket |

---
## 📖 Swagger Documentation
The API has documentation generated with Swagger.



