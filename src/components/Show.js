import React, {Component} from "react";
import Movie from "./Movie"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from "@restart/ui/esm/Button";
//import moviesList from './components/Movies'

class Show extends Component
{
    constructor(props) {
        super(props)

        this.state={
            seans:{
           title=props.title,
            year=props.year,
            duration=props.duration,
            date=props.date,
            }
        }
     
    }
    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
}


addShow() {
    this.setState(state => {
        if (state.title !== '' && state.year !== '' && state.duration !== '' && state.date!=='') {
            var show = this.props.Movie
    
            show.push({
                title: state.title,
                year: state.year,
                duration: state.duration,
                date:state.date
            })
    
            return {seans : show}
        }
    })
}
render() {
    return (
        <div>
          
            
            <section className="showList">
         
            
                {/* <h3>Lista Filmów</h3> */}
                {this.state.seans.map((show, key) => {
                    return (
                        <Show
                            key={key}
                            title = {show.title}
                            year = {show.year}
                            duration = {show.duration}
                            
                        
                        />
                        
                    )
                })}
            </section>

            <div>
                <p>Dodaj seans</p>
                <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                <button variant="secondary" onClick={() => this.addShow()}>Dodaj</button>
            </div>
            <div>
                <p>Usun seans</p>
                <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                
                <button variant="secondary" onClick={() => this.deleteMovie()}>Usun</button>
            </div>

            <div>
                <p>Edytuj film</p>
                <input type="text" placeholder="Tytuł filmu" id="editMovie" onChange={(e) => this.onChange(e)}/>
                
                <button variant="secondary" onClick={() => this.editMovie()}>Usun</button>
            </div>
        </div>
    )    
}



}