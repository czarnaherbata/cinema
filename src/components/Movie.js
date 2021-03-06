import React from "react";
import PropTypes from "prop-types"

const Movie = props => {
    return (
        <div className="movie">
            <p>Tytuł: {props.title}</p>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
}

Movie.defaultProps = {
    id:"0",
    title: "MovieTitle",
    year: "MovieYear",
    duration: 0
}

export default Movie;

