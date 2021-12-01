import React from "react";
import PropTypes from "prop-types"

const Show = props => {
    return (
        <div className="shows">
            <p>Tytuł: {props.title}</p>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>
            <p>Data:{props.date}</p>
        </div>
    );
};

Show.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    date: PropTypes.date.isRequired
}

Show.defaultProps = {
    title: "ShowTitle",
    year: "ShowYear",
    duration: 0,
    date:0
}

export default Movie;

