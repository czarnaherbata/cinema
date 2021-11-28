import React from "react"
import Movies from "./components/Movies"
import Title from "./components/Title"

const pageTitle = "CinemaCity"

function App() {
    return (
        <div>
            <Title />
            <div className="gradient-bar"/>
            <div className="main">
                <Movies />
            </div>
        </div>   
    );
};

export default App;
