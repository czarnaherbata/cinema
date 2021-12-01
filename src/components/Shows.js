import React, {Component} from "react";
import Movie from "./Movie"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from "@restart/ui/esm/Button";
//import moviesList from './components/Movies'
import Show from "/.components/Show"

class Shows extends Component
{
    constructor(props) {
        super(props)

        this.state={
            
                showsList : [
                    {
                        title: "Katarzyna Bella Donna",
                        year: 1998,
                        duration: 120,
                        date: 10/12/20
                    },
                
                    {
                        title: "Kapitan Bomba",
                        year: 2004,
                        duration: 69,
                        date:10/12/20
                    }
                ], 
    
                title: '',
                year: '',
                duration: '',
                date:'',
                sortValue:'',
                inputValue: ''
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
                {this.state.showsList.map((show, key) => {
                    return (
                        <Show
                            key={key}
                            title = {show.title}
                            year = {show.year}
                            duration = {show.duration}
                            date={show.date}
                            
                        
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

        </div>
    )    
}



}