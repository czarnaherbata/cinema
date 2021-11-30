import React, {Component} from "react";
import Movie from "./Movie"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from "@restart/ui/esm/Button";

class Show extends Component
{
    constructor(props) {
        super(props)

        this.state={
            show:{
           // title=props.title,
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
            var show = state.Movie
    
            show.push({
                title: state.title,
                year: state.year,
                duration: state.duration,
                date:state.date
            })
    
            return {show : show}
        }
    })
}



}