import { useState } from "react"
import { AuthContext } from "../context";

const AuthProvider = ({children}) => {
    const userData = {
        name: "Ravi Kumar",
        empId: 101,
        email: 'ravi@email.com',
        role: 'Business Analyst',
        department: 'IT',
        managerId: 50,
        managername: 'Shivank Mishra',
        dateOfJoining: '01/02/2022'
    }
    const [authState, setAuthState] = useState({
        isLogin: false,
        userData: null,
    })
    const toggleLogin = () => {
        const isLogin = !authState.isLogin;
        setAuthState({
            isLogin,
            userData: isLogin ? userData : null
        })
    }
    return (
        <AuthContext.Provider value={{ authState, toggleLogin }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
