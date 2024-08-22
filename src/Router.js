import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";


function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact Component={Home}/>
                <Route path="/about" Component={About}/>
            </Routes>
        </Router>
    )
}
export default AppRouter;