# Todo App - Product Requirements Document

## Overview
A simple, full-stack todo application with React frontend and Express backend.

## Core Features

### 1. Task Management
- Create new tasks with title and description
- Mark tasks as complete/incomplete
- Delete tasks
- Edit task details

### 2. Task Display
- List all tasks
- Filter by status (all, active, completed)
- Show task count

### 3. Data Persistence
- Tasks stored in backend database
- API endpoints for CRUD operations

## Technical Requirements

### Frontend (React)
- Single page application
- Responsive design
- Real-time updates
- Form validation

### Backend (Express)
- RESTful API
- JSON responses
- Error handling
- CORS enabled

### API Endpoints
```
GET /api/tasks - Get all tasks
POST /api/tasks - Create new task
PUT /api/tasks/:id - Update task
DELETE /api/tasks/:id - Delete task
```

### Data Model
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

## Development Status
- [ ] Backend API setup
- [ ] Database integration
- [ ] Frontend components
- [ ] API integration
- [ ] Testing
- [ ] Deployment
