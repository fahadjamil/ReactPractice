import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function Home() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
export default Home;