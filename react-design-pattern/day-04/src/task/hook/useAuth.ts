import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const { authState, toggleLogin } = useContext(AuthContext);
    return [authState, toggleLogin];
}

export { useAuth };