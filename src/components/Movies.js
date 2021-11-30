import React, {Component} from "react";
import Movie from "./Movie"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from "@restart/ui/esm/Button";


class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList : [
                {
                    title: "Katarzyna Bella Donna",
                    year: 1998,
                    duration: 120
                },
            
                {
                    title: "Kapitan Bomba",
                    year: 2004,
                    duration: 69
                }
            ], 

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

    // onClick() {
    //     confirmAlert({
    //         customUI: ({ onClose }) => {
    //             return (
    //                 <div>
    //                     <h1>Dodaj informacje o filmie</h1>
    //                     <p><textarea cols="50" rows="10" id="content" defaultValue={this.state.content} onChange={(e) => this.onChange(e)}></textarea></p>
    //                     <Button style={{float: "right"}} variant="danger" onClick={onClose}>Zamknij okno</Button>
    //                 </div>
    //             );
    //         }
    //     });
    // }

    addMovie() {
        this.setState(state => {
            if (state.title !== '' && state.year !== '' && state.duration !== '') {
                var movies = state.moviesList
        
                movies.push({
                    title: state.title,
                    year: state.year,
                    duration: state.duration
                })
        
                return {moviesList : movies}
            }
        })
    }
    editMovie(index, s)
    {
        this.setState(state=>{
            var movies=state.moviesList;
            movies[index].title=s.editTitle;
            movies[index].year=s.editYear;
            movies[index].duration=s.editDuration;

        })
            
        
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
                            <Movie
                                key={key}
                                title = {movie.title}
                                year = {movie.year}
                                duration = {movie.duration}
                                
                            
                            />
                            
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
                    
                    <button variant="secondary" onClick={() => this.editMovie()}>Usun</button>
                </div>
            </div>
        )    
    }
}

export default Movies;
