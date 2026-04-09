# Expense Tracker Application

This is a full-stack Expense Tracker application built using React (frontend), FastAPI (backend), and MongoDB (database). The application supports expense management, reporting, and basic authentication.

---

## Features

* User authentication (login/logout)
* Add, view, and delete expenses
* Budget tracking
* Reports and analytics
* Protected routes (frontend)

---

## Tech Stack

**Frontend**

* React
* React Router
* Context API

**Backend**

* FastAPI
* PyMongo

**Database**

* MongoDB

---

## Prerequisites

Ensure the following are installed:

* Node.js (v16 or above)
* npm
* Python (v3.9 or above)
* pip
* MongoDB (local or cloud)

---

## Project Structure

```
## Project Structure

```
expense-tracker/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/              # CSS, images, static files
│   │   │   └── styles.css
│   │
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ExpenseList.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   └── BudgetCard.jsx
│   │
│   │   ├── pages/               # Page-level components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── AddExpensePage.jsx
│   │   │   ├── BudgetPage.jsx
│   │   │   └── Reports.jsx
│   │
│   │   ├── context/             # Global state management
│   │   │   ├── AuthContext.jsx
│   │   │   └── BudgetContext.jsx
│   │
│   │   ├── routes/              # Routing logic
│   │   │   ├── AppRoutes.jsx
│   │   │   └── ProtectedRoute.js
│   │
│   │   ├── services/            # API calls
│   │   │   └── api.js
│   │
│   │   ├── hooks/               # Custom hooks
│   │   │   └── useExpenses.js
│   │
│   │   ├── utils/               # Utility functions
│   │   │   └── calculateTotal.js
│   │
│   │   ├── App.js               # Root component
│   │   └── index.js             # Entry point
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/             # Business logic layer
│   │   └── expense_controller.py
│   │
│   ├── routes/                  # API routes
│   │   └── expense_routes.py
│   │
│   ├── models/                  # Data models / schemas
│   │   └── expense_model.py
│   │
│   ├── database/                # Database connection
│   │   └── mongo.py
│   │
│   ├── services/                # Authentication / services
│   │   └── auth_service.py
│   │
│   ├── utils/                   # Helper functions
│   │   └── helpers.py
│   │
│   ├── main.py                  # FastAPI entry point
│   └── requirements.txt
│
├── .gitignore
├── README.md
```

---

## Notes

* Frontend follows component-based architecture using React
* Backend follows layered architecture (routes → controllers → database)
* MongoDB is used for storing expense data
* Authentication is handled using localStorage (frontend)

---

```

---

## Backend Setup

### 1. Navigate to Backend

```
cd backend
```

### 2. Create Virtual Environment

```
python -m venv venv
```

Activate environment:

Windows:

```
venv\Scripts\activate
```
```

### 3. Install Dependencies

```
pip install -r requirements.txt
```

### 4. Start MongoDB

Make sure MongoDB is running locally:

```
mongod
```

Default connection:

```
mongodb://localhost:27017
```

### 5. Run Backend Server

```
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

### 6. API Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

### 1. Navigate to Frontend

```
cd frontend
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Frontend

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## Login Credentials

```
Username: admin
Password: 1234
```

---

## API Endpoints

* GET /expenses → Fetch all expenses
* POST /expenses → Add expense
* DELETE /expenses/{id} → Delete expense

---

## Troubleshooting

### MongoDB not running

```
mongod
```

### Port already in use

```
npx kill-port 3000
```

### Python dependency issues

```
pip install --upgrade pip
pip install -r requirements.txt
```

### Clear login state

```
localStorage.clear()
```

---

##  Run Full Project (Backend + Frontend)

 Backend (FastAPI)

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend running:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs

 Frontend (React) - open new terminal

cd frontend
npm install
npm start

Frontend running:

http://localhost:3000

* Authentication is implemented using localStorage (frontend only)
* For production, implement JWT-based authentication
* MongoDB stores all expense data

---

## Author

Tamil Selvan
