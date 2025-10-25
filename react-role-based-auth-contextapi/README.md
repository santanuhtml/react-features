# User Authentication System with Role-Based Access

This project is a user authentication system that integrates both login and signup functionalities, protected routes, and role-based access control. It allows users to sign up, log in, and access different parts of the application based on their roles.

## Key Features:
- User Authentication: Users can sign up and log in. User data is stored in localStorage with an authToken.

- Role-Based Access Control: Users can have different roles (user, editor, admin). Based on the role, access to certain routes/pages is granted or restricted.

- API Integration: Data is fetched from an external mock API for user data (could be replaced with real backend in future).

- Protected Routes: Only authenticated users with valid roles can access specific routes via AuthGuard and RoleGuard components.

## License

MIT