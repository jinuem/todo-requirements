# Simple Todo App - Product Requirements Document

## Overview
A minimal, full-stack todo application with React frontend and Express backend for basic task management.

## Core Features

### 1. User Authentication
- Simple login page with username/password
- Basic session management
- Logout functionality
- Protect todo routes (redirect to login if not authenticated)

### 2. Essential Task Operations (Post-Login)
- Add new todo with title only (keep it simple)
- Toggle todo completion status
- Delete completed todos
- View all todos in a single list
- User-specific todos (each user sees only their todos)

### 3. Simple UI Requirements
- **Login Page**: Clean login form with username/password fields
- **Todo Dashboard**: Clean, minimal interface (shown after login)
- Add todo input field at top
- Todo list below with checkboxes
- Delete button for completed items
- Show total count of active todos
- Logout button in header

### 3. Basic Data Storage
- Use JSON file for data persistence (no database needed initially)
- Store users and todos separately
- Simple session storage (in-memory for now)
- Auto-save on every change

## Technical Specifications

### Frontend (React)
- **Login Component** - Simple login form
- **Todo Dashboard Component** - Main todo interface (protected route)
- Use React hooks (useState, useEffect)
- React Router for navigation (login/dashboard)
- Fetch API for backend communication - **INTEGRATE WITH http://localhost:5000**
- Basic CSS styling
- Port: 3000
- **Unit tests with Jest and React Testing Library**

### Backend (Express)
- **Authentication endpoints** - login/logout
- **Session management** - simple in-memory sessions
- **Protected todo endpoints** - require authentication
- Simple Express server
- JSON file storage (users.json, todos.json)
- CORS enabled for localhost:3000
- Port: 5000
- **Unit tests with Jest and Supertest**

### API Endpoints (Updated)
```
POST /api/auth/login - User login
POST /api/auth/logout - User logout
GET /api/auth/me - Get current user

GET /api/todos - Get user's todos (protected)
POST /api/todos - Add new todo (protected)
PUT /api/todos/:id - Toggle completion (protected)
DELETE /api/todos/:id - Delete todo (protected)
```

### Data Models
```json
// User
{
  "id": "number",
  "username": "string",
  "password": "string"
}

// Todo (Updated)
{
  "id": "number",
  "userId": "number",
  "title": "string", 
  "completed": "boolean"
}
```

## Implementation Priority
1. **BACKEND FIRST**: Create Express server with JSON storage ✅
2. **ADD AUTHENTICATION**: Login/logout endpoints and session management
3. **FRONTEND LOGIN**: Create login page and routing
4. **FRONTEND TODO**: Update todo dashboard with authentication
5. **INTEGRATION**: Connect frontend to backend with auth - **CRITICAL FIX NEEDED**
6. **TESTING**: Unit tests for both services
7. **VALIDATION**: Manual testing of all features

## Current Issues to Fix
- **Add login page and authentication system**
- **Update existing todo functionality to be user-specific**
- **API integration** - frontend must connect to backend properly with auth
- **Missing unit tests** - both services need test coverage

## Development Status
- [x] Express server setup
- [x] JSON file storage
- [x] API endpoints implementation
- [x] React app creation
- [ ] **Authentication system (URGENT)**
- [ ] **Login page (URGENT)**
- [ ] **Protected routes (URGENT)**
- [ ] **User-specific todos (URGENT)**
- [ ] **Frontend UI rendering (URGENT)**
- [ ] **API integration with auth (URGENT)**
- [ ] **Backend unit tests**
- [ ] **Frontend unit tests**
- [ ] Basic styling
- [ ] Manual testing

## Agent Instructions
- Backend Agent: Add authentication endpoints, session management, and user-specific todo filtering
- Frontend Agent: Create login page, implement routing, update todo dashboard with auth
- Both agents: Add comprehensive unit tests and ensure proper authentication flow
- Test with default user: username="admin", password="password"
