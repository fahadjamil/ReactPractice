import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function About(){
    const { theme, toggleTheme } = useTheme();
    return <h1>About Page{theme}</h1>
}
export default About;