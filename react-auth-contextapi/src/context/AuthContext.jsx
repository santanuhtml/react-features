import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const AuthContext  = createContext();

const AuthProvider = ({children}) => {
    const [pageLoader, setPageLoader] = useState(true);
    const [user, setUser] = useState(null);

    const login = (loggedInUser) => {
        localStorage.setItem('setUser', loggedInUser.id);
        setUser(loggedInUser);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('setUser');
    }

    useEffect(() => {
        const storedId = localStorage.getItem("setUser");
        if (storedId) {
            axios.get('https://68edf0acdf2025af7801a96c.mockapi.io/users/' + storedId)
                .then(response => setUser(response.data))
                .catch(() => setUser(null))
                .finally(() => setPageLoader(false));
        } else {
            setPageLoader(false);
        }
    }, []);
    
    return(
        <AuthContext.Provider value={{user, login, logout, pageLoader}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;