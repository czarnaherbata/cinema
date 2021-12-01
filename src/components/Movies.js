import React, {Component} from "react";
import Movie from "./Movie"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from "@restart/ui/esm/Button";
import { Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "react-router-dom"
import { Routes } from "react-router";
import Popup from "reactjs-popup";
import reactDom from "react-dom";
import { createMovie } from "../api/Api";


class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList : [
                {
                    id:1,
                    title: "Katarzyna Bella Donna",
                    year: 1998,
                    duration: 120
                },
            
                {
                    id:2,
                    title: "Kapitan Bomba",
                    year: 2004,
                    duration: 69
                }
            ], 
            id:'',
            title: '',
            year: '',
            duration: '',
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

    movieFilter=(e)=>{
        this.setState({
            inputValue:e.target.v
        })
    }

    addMovie() {
        this.setState(state => {
            if (state.title !== '' && state.year !== '' && state.duration !== '') {
                var movies = state.moviesList
                createMovie(state.title, state.year, state.duration)
                movies.push({
                    title: state.title,
                    year: state.year,
                    duration: state.duration
                })
        
                return {moviesList : movies}
            }
        })
    }



    editMovie = index => {
        return (<div className="editMovie">
                    <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                    <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                    <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                </div>)

        // this.setState(state=>{
        //     var movies=state.moviesList;
        //     movies[index].title=s.editTitle;
        //     movies[index].year=s.editYear;
        //     movies[index].duration=s.editDuration;
        // })
    }

    deleteMovie(index)
    {
        this.setState(state=>{
                var movies=state.moviesList
                movies.splice(index, 1)
                return{moviesList:movies}
            }
        )
    }

    render() {
        return (
            <div>
              
                <input type="next" placeholder="Search" value={this.props.inputValue}  onChange={(e) => this.onChange(e)}></input>
                <button variant="search" >Search</button>
                <section className="moviesList">
             
                
                    {/* <h3>Lista Filmów</h3> */}
                    {this.state.moviesList.map((movie, key) => {
                        return (
                            <div className="movieContainer">
                                <Movie
                                key={key}
                                title = {movie.title}
                                year = {movie.year}
                                duration = {movie.duration}
                                />
                                <button variant="secondary" onClick={() => this.deleteMovie(key)}>Usuń Film</button>
                                <button variant="secondary" onClick={() => this.editMovie(key)}>Edytuj Film</button>
                            </div>
                        )
                    })}
                </section>

                 <div>
                    <p>Dodaj film</p>
                    <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                    <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                    <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                    <button variant="secondary" onClick={() => this.addMovie()}>Dodaj</button>
                </div>
                <div>
                    <p>Usun film</p>
                    <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                    
                    <button variant="secondary" onClick={() => this.deleteMovie()}>Usun</button>
                </div>

                <div>
                    <p>Edytuj film</p>
                    <input type="text" placeholder="Tytuł filmu" id="editMovie" onChange={(e) => this.onChange(e)}/>
                    
                    <button variant="secondary" onClick={() => this.editMovie()}>Edytuj</button>
                </div> 
            </div>
        )    
    }
}

export default Movies;
