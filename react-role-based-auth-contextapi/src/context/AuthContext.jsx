
import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

// Auth context shape for better intellisense and clarity
const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    pageLoader: true,
    hasRole: () => false,
    hasPermission: () => false,
});

const AuthProvider = ({ children }) => {
    const [pageLoader, setPageLoader] = useState(true);
    const [user, setUser] = useState(null);

    // Helper: check if user is authenticated
    const isAuthenticated = user ? true : false;
    // const isAuthenticated = !!user;

    // Helper: check user role
    const hasRole = (role) => user ? user.role === role : false;

    // Helper: check user permissions (expand as needed)
    // const hasPermission = (permission) => {
    //     if (!user || !user.permissions) return false;
    //     return user.permissions.includes(permission);
    // };

    // Login: store only user ID in localStorage
    const login = (loggedInUser) => {
        localStorage.setItem('userId', loggedInUser.id);
        setUser(loggedInUser);
    };

    // Logout: clear user from state and localStorage
    const logout = () => {
        setUser(null);
        localStorage.removeItem('userId');
    };

    // On mount, restore user from localStorage by fetching from backend
    useEffect(() => {
        const storedId = localStorage.getItem('userId');
        if (storedId) {
            axios.get('https://68edf0acdf2025af7801a96c.mockapi.io/users/' + storedId)
                .then(response => setUser(response.data))
                .catch(() => setUser(null))
                .finally(() => setPageLoader(false));
        } else {
            setPageLoader(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            pageLoader,
            hasRole,
            // hasPermission,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;




//For future JWT integration, you can replace the current request with the following:
/*
const AuthProvider = ({ children }) => {
    const [pageLoader, setPageLoader] = useState(true);
    const [user, setUser] = useState(null);

    // Check if user is authenticated based on the user object set in the state
    const isAuthenticated = user ? true : false;

    const hasRole = (role) => user ? user.role === role : false;

    const hasPermission = (permission) => {
        if (!user || !user.permissions) return false;
        return user.permissions.includes(permission);
    };

    const login = (loggedInUser) => {
        localStorage.setItem('authToken', loggedInUser.token);
        setUser(loggedInUser);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get('https://your-api-endpoint.com/user', {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(response => setUser(response.data)) // Set user from the backend
                .catch(() => setUser(null)) // If token is invalid, set user to null
                .finally(() => setPageLoader(false)); // Stop loading after the operation
        } else {
            setPageLoader(false); // Stop loading if no token
        }
    }, []); // Run only once on component mount

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            pageLoader,
            hasRole,
            hasPermission,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

*/