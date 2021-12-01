import React, {Component} from "react";
import Movie from "./Movie"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from "@restart/ui/esm/Button";
import { Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "react-router-dom"

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        };
    }

    add = () => {
        const { onClick } = this.props;
        onClick();
        this.setState({
            status: true
        });
    }

    onChange = (event) => {
        const { onChange } = this.props;
        onChange(event);
    }

    render() {
        const { status } = this.state;
        const { fields } = this.props;
        if (status === true)
            return <Redirect to="/" />
        return (
            <div>
                {
                    Object.keys(fields).map(field => {
                        let value = fields[field];
                        return <div className="formLabel" key={field}>
                            <p><label>{field}: </label></p>
                            <input type={value} id={field} onChange={this.onChange} />
                        </div>
                    })
                }
                <button className="formButton" onClick={this.add}>Add student</button>
            </div>
        );
    }
}
export default AddMovie;