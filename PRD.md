# Simple Todo App - Product Requirements Document

## Overview
A minimal, full-stack todo application with React frontend and Express backend for basic task management.

## Core Features

### 1. Essential Task Operations
- Add new todo with title only (keep it simple)
- Toggle todo completion status
- Delete completed todos
- View all todos in a single list

### 2. Simple UI Requirements
- **Todo Dashboard**: Clean, minimal interface
- Add todo input field at top
- Todo list below with checkboxes
- Delete button for completed items
- Show total count of active todos

### 3. Basic Data Storage
- Use JSON file for data persistence (no database needed initially)
- Store todos in simple JSON format
- Auto-save on every change

## Technical Specifications

### Frontend (React)
- **Todo Dashboard Component** - Main todo interface
- Use React hooks (useState, useEffect)
- Fetch API for backend communication - **INTEGRATE WITH http://localhost:5000**
- Basic CSS styling
- Port: 3000
- **Unit tests with Jest and React Testing Library**

### Backend (Express)
- **Todo endpoints** - CRUD operations
- Simple Express server
- JSON file storage (todos.json)
- CORS enabled for localhost:3000
- Port: 5000
- **Unit tests with Jest and Supertest**

### API Endpoints
```
GET /api/todos - Get all todos
POST /api/todos - Add new todo
PUT /api/todos/:id - Toggle completion
DELETE /api/todos/:id - Delete todo
```

### Data Models
```json
// Todo
{
  "id": "number",
  "title": "string", 
  "completed": "boolean"
}
```

## Implementation Priority
1. **BACKEND FIRST**: Create Express server with JSON storage ✅
2. **FRONTEND TODO**: Create todo dashboard
3. **INTEGRATION**: Connect frontend to backend - **CRITICAL FIX NEEDED**
4. **TESTING**: Unit tests for both services
5. **VALIDATION**: Manual testing of all features

## Current Issues to Fix
- **API integration** - frontend must connect to backend properly
- **Missing unit tests** - both services need test coverage

## Development Status
- [x] Express server setup
- [x] JSON file storage
- [x] API endpoints implementation
- [x] React app creation
- [ ] **Frontend UI rendering (URGENT)**
- [ ] **API integration (URGENT)**
- [ ] **Backend unit tests**
- [ ] **Frontend unit tests**
- [ ] Basic styling
- [ ] Manual testing

## Agent Instructions
- Backend Agent: Ensure todo endpoints work properly with simplified data model
- Frontend Agent: Create simple todo dashboard without authentication
- Both agents: Add comprehensive unit tests and ensure proper API integration
