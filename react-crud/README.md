# React CRUD Application

A simple and efficient CRUD (Create, Read, Update, Delete) application built with React, demonstrating basic data management operations.

## Features

- ✨ Create new records
- 📖 Read existing records
- 🔄 Update record information
- ❌ Delete records
- 🎯 Clean and intuitive user interface
- 📱 Responsive design with Bootstrap
- 🚀 Fast and efficient data handling

## Tech Stack

- React 18
- React Router v6
- Bootstrap 5
- JSON Server (for mock backend)
- Vite (build tool)

## Project Structure

```
src/
├── App.jsx           # Main application component
├── Home.jsx          # Home page with records listing
├── Create.jsx        # Create new record form
├── Read.jsx          # View record details
├── Update.jsx        # Update record form
├── Delete.jsx        # Delete confirmation
└── assets/          # Static assets
```

## Components Overview

- `Home`: Displays list of all records with actions
- `Create`: Form to add new records
- `Read`: Shows detailed view of a single record
- `Update`: Form to modify existing records
- `Delete`: Handles record deletion with confirmation

## Routes

- `/`: Home page with records list
- `/create`: Add new record
- `/read/:id`: View record details
- `/update/:id`: Edit record
- `/delete/:id`: Delete record

## Getting Started

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Start the JSON server (mock backend):
   ```bash
   json-server --watch db.json
   ```

## API Endpoints

The application uses JSON Server with the following endpoints:

- `GET /records`: Fetch all records
- `GET /records/:id`: Fetch single record
- `POST /records`: Create new record
- `PUT /records/:id`: Update record
- `DELETE /records/:id`: Delete record

## Features in Detail

### Create
- Input validation
- Form submission handling
- Success/error notifications

### Read
- Detailed view of records
- Clean data presentation
- Navigation back to list

### Update
- Pre-filled form with existing data
- Real-time validation
- Optimistic updates

### Delete
- Confirmation dialog
- Instant UI update
- Error handling

## Contributing

Feel free to contribute to this project:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

MIT