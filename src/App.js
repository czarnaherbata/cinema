import React, { Component } from "react"
import Movies from "./components/Movies"
import Title from "./components/Title"
import { Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "react-router-dom"


const pageTitle = "CinemaCity"


const Movie=()=>
{
    return(
        <div>
            <span>Hello</span>
        </div>
    )
}

class Routing extends Component{
    constructor(props){
        super(props)
        this.state={}
    }


    render()
{
    return(
        <Router>
            <Link to={{
                pathname:'/first',
                state:{message:'hello'}
            }}>Go to first component
            </Link>
            <Route path="first" component={Movies}/>
        </Router>
    );
}
}



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
