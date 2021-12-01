import React, { Component } from "react"
import Movies from "./components/Movies"
import Title from "./components/Title"
import { Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "react-router-dom"
//import Routing from "./components/Routing"

const pageTitle = "CinemaCity"


const Movie=()=>
{
    return(
        <div>
            <span>Hello</span>
        </div>
    )
}

function App() {
    return (
        <div>
            React Crud Operations
            <Title />
            {/* <Routing /> */}
            <div className="gradient-bar"/>
            <div className="main">

            <Movies />

        
            </div>
        </div>   
    );
};

export default App;
