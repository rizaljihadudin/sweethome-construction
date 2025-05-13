import { useState } from "react";
import { AuthContext } from "./AuthContext";

{/* Create AuthProvider */}
export const AuthProvider = ({children}) => {
    const userInfo = localStorage.getItem('userInfo');
    const [user, setUser] = useState(userInfo ? JSON.parse(userInfo) : null);

    {/* Login */}
    const login = (user) => {
        setUser(user);
    }

    {/* Logout */}
    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    }


    {/* Render */}
    return (
        <AuthContext.Provider value={{
            user, 
            login, 
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}