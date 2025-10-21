# React Authentication with Context API

A modern authentication system built with React and Context API, featuring protected routes and user session management.

## Features

- 🔐 User Authentication (Login/Signup)
- 🛡️ Protected Routes with AuthGuard
- 👤 User Profile Management
- 📊 Dashboard Access Control
- ⚡ Context API for State Management
- 🚀 Route Protection with React Router

## Tech Stack

- React 18
- React Router v6
- Context API
- Axios for API calls
- Vite
- MockAPI for backend simulation

## Project Structure

```
src/
├── components/
│   ├── AuthGuard.jsx    # Protected route wrapper
│   ├── Header.jsx       # Navigation component
│   └── Footer.jsx       # Footer component
├── context/
│   └── AuthContext.jsx  # Authentication context
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # About page
│   ├── Login.jsx        # Login page
│   ├── Signup.jsx       # Registration page
│   ├── Layout.jsx       # Main layout wrapper
│   └── AuthPages/       # Protected pages
│       ├── Dashboard.jsx
│       ├── Profile.jsx
│       └── Settings.jsx
└── router/
    └── Router.jsx       # Route configurations
```

## Key Components

### Authentication Guard
- Protects routes from unauthorized access
- Redirects to login if not authenticated
- Persists user session

### Context Provider
- Manages authentication state
- Handles login/logout operations
- Provides user information globally

### Protected Routes
- Dashboard
- User Profile
- Settings
- Other authenticated features

## Routes

- `/`: Home page (public)
- `/about`: About page (public)
- `/login`: User login
- `/signup`: User registration
- `/dashboard`: User dashboard (protected)
- `/profile`: User profile (protected)
- `/settings`: User settings (protected)

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

## Authentication Flow

1. **User Registration**
   - Form validation
   - API integration
   - Success/error handling

2. **User Login**
   - Credentials verification
   - Token generation
   - Session storage

3. **Protected Routes**
   - Route guard implementation
   - Authentication check
   - Redirect handling

4. **Session Management**
   - Token persistence
   - Auto logout
   - Session refresh

## API Integration

The project uses MockAPI for backend simulation with endpoints:
- `POST /users/register`
- `POST /users/login`
- `GET /users/profile`
- `PUT /users/profile`

## State Management

The application uses React's Context API for state management through `AuthContext.jsx`:

- User authentication state
- Login/Logout functions
- User profile data
- Session management
- Loading states

## Security Features

- Protected route guards
- Token-based authentication
- Session timeout
- Secure credential handling
- API error handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT