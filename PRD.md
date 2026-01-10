# **TODO Application – Unified Agent PRD**

**Frontend Agent: React**
**Backend Agent: Express + File Storage**
**Document Type:** Single Source of Truth Requirements
**Version:** 1.0

---

## **1. Product Overview**

A simple TODO application where users can create, view, complete, and delete tasks.
Data is stored in a text file (JSON format) on the backend.
Frontend communicates exclusively through defined REST APIs.

This PRD governs **both agents**.
No deviation is allowed.

---

## **2. Goals**

* Deliver a functional TODO app with minimal UI.
* Provide a stable REST backend with file-based persistence.
* Ensure clean separation of responsibilities between frontend and backend.
* Guarantee deterministic behavior based on this document.

---

## **3. User Stories**

### **US-01: Add a Task**

**As a user,**
I want to add a new TODO item
**so that** I can track tasks I need to complete.

**Acceptance Criteria**

* User enters text in an input field.
* Pressing “Add” triggers a backend request.
* Todo appears immediately in the list.
* Title cannot be empty.

---

### **US-02: View All Tasks**

**As a user,**
I want to see all my tasks
**so that** I can know what I need to do.

**Acceptance Criteria**

* On page load, frontend loads tasks via API.
* Tasks render in a list.
* Completed tasks appear with a checked checkbox.

---

### **US-03: Mark Task as Completed**

**As a user,**
I want to mark a task as completed
**so that** I can track my progress.

**Acceptance Criteria**

* Clicking checkbox toggles completion.
* Backend updates the corresponding field.
* UI updates instantly.

---

### **US-04: Delete Task**

**As a user,**
I want to delete a task
**so that** I can remove things I no longer need.

**Acceptance Criteria**

* Clicking delete removes task from backend.
* UI reflects deletion instantly.

---

## **4. Functional Requirements**

### **4.1 API Specification (Must Be Followed Exactly)**

#### **GET /api/todos**

Returns the full list.

```json
[
  { "id": "string", "title": "string", "completed": true }
]
```

#### **POST /api/todos**

Request:

```json
{ "title": "string" }
```

Response:

```json
{ "id": "string", "title": "string", "completed": false }
```

#### **PUT /api/todos/:id**

Request:

```json
{ "completed": boolean }
```

Response:

```json
{ "id": "string", "title": "string", "completed": boolean }
```

#### **DELETE /api/todos/:id**

Response:

```json
{ "success": true }
```

---

## **5. Backend Agent Requirements (Express)**

### **5.1 File Storage Rules**

* File name: `todos.json`
* Always contain valid JSON array.
* If missing → create with empty array.
* Use atomic write:

  * Write to temp → replace original.

### **5.2 Validation Rules**

* Title must be non-empty string.
* Completed must be boolean.
* Unknown IDs return 404.

### **5.3 Backend Tasks**

#### **Task BE-01: Project Setup**

* Initialize Node project.
* Install Express, CORS, and FS libs.
* Setup server on port `4000`.

#### **Task BE-02: CORS Setup**

* Allow origin `http://localhost:3000`.

#### **Task BE-03: Implement GET /api/todos**

* Read file.
* Parse JSON.
* Return list.

#### **Task BE-04: Implement POST /api/todos**

* Validate input.
* Create ID (`Date.now()` + random suffix).
* Append to file.
* Return created object.

#### **Task BE-05: Implement PUT /api/todos/:id**

* Validate presence.
* Update only `completed` field.
* Save file.

#### **Task BE-06: Implement DELETE /api/todos/:id**

* Remove matching entry.
* Save file.

#### **Task BE-07: Error Handling**

On error, return:

```json
{ "error": "description" }
```

With correct HTTP status codes.

---

## **6. Frontend Agent Requirements (React)**

### **6.1 Mandatory Components**

* `App.jsx` – state + API calls
* `TodoInput.jsx` – input + add handler
* `TodoList.jsx` – renders list
* `TodoItem.jsx` – checkbox + delete

### **6.2 State Management**

All state resides in `App.jsx`:

* `todos`
* `loading`
* `error`

### **6.3 Frontend Tasks**

#### **Task FE-01: Project Setup**

* Use React + Vite.
* Base URL: `http://localhost:4000/api/todos`.

#### **Task FE-02: Load Todos**

* On mount → GET `/api/todos`.
* Store in state.

#### **Task FE-03: Add Todo**

* Prevent empty title.
* POST request, then update state.

#### **Task FE-04: Toggle Completion**

* PUT request with new `completed` state.
* Update local state.

#### **Task FE-05: Delete Todo**

* DELETE request.
* Remove from state.

#### **Task FE-06: Basic Styling**

* Simple CSS for readability.
* No special libraries.

---

## **7. Non-Functional Requirements**

* Code must be readable and extensible.
* Must run on local dev easily.
* UI and API behaviors must not conflict with the spec.

---

## **8. Integration Requirements**

* Frontend assumes backend is strict to this API spec.
* Backend must not change response formats.
* Both agents must treat this PRD as the **single truth source**.

---

## **9. Future Scope (Not for current agents)**

* DB integration
* Auth
* Filters
* Sorting

---
