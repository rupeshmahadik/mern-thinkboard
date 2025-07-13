# Think NoteApp

A simple and modern note-taking application built with React (frontend) and Express/Mongoose (backend).

## Features

- Create, edit, and delete notes
- Organize notes by categories
- Search and filter notes
- Responsive design for desktop and mobile
- Fast and intuitive user experience

## Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose)

## Getting Started

### Backend

1. Navigate to the backend folder:
   ```bash
   cd noteapp/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5001` by default.

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd noteapp/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

## Folder Structure

```
noteapp/
  backend/    # Express/Mongoose API
  frontend/   # React client
```

## API Endpoints

- `GET /api/notes` - Fetch all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## License

MIT

---

Feel free to contribute or suggest improvements!

## Deployment

- Github
  - Push the code on github
  - add .env in gitignore
  - npm init -y in root folder to create package.json
  - frontend - 5173
  - backend - 5001
  - server under single domain
- render
