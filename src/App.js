import React from "react"
import Movies from "./components/Movies"

const pageTitle = "CinemaCity"

function App() {
    return (
        <div>
            <header>
                <h1>{pageTitle}</h1>
            </header>    

            <Movies />
        </div>    
    );
};

export default App;
