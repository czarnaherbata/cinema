import React, {Component} from "react";

class Room extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            seats=props.seats,
        }
    }

    render() {
        return (
            <div className="room">

            </div>
        )
    }
}