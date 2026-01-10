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
- Clean, minimal interface
- Add todo input field at top
- Todo list below with checkboxes
- Delete button for completed items
- Show total count of active todos

### 3. Basic Data Storage
- Use JSON file for data persistence (no database needed initially)
- Auto-save on every change

## Technical Specifications

### Frontend (React)
- Single component app (App.js)
- Use React hooks (useState, useEffect)
- Fetch API for backend communication
- Basic CSS styling
- Port: 3000

### Backend (Express)
- Simple Express server
- JSON file storage (todos.json)
- CORS enabled for localhost:3000
- Port: 5000

### API Endpoints (Simplified)
```
GET /api/todos - Get all todos
POST /api/todos - Add new todo
PUT /api/todos/:id - Toggle completion
DELETE /api/todos/:id - Delete todo
```

### Data Model (Minimal)
```json
{
  "id": "number",
  "title": "string", 
  "completed": "boolean"
}
```

## Implementation Priority
1. **BACKEND FIRST**: Create Express server with JSON storage
2. **FRONTEND SECOND**: Create React app that consumes the API
3. **INTEGRATION**: Connect frontend to backend
4. **TESTING**: Manual testing of all features

## Development Status
- [ ] Express server setup
- [ ] JSON file storage
- [ ] API endpoints implementation
- [ ] React app creation
- [ ] Frontend components
- [ ] API integration
- [ ] Basic styling
- [ ] Manual testing

## Agent Instructions
- Backend Agent: Focus on API and data storage first
- Frontend Agent: Wait for backend completion, then build UI
- Both agents: Keep implementation minimal and functional
