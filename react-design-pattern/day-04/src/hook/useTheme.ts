import { ThemeContext } from "../context";
import { useContext } from "react";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme }
}

export { useTheme };
