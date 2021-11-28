import React from "react";
import PropTypes from "prop-types"

const Movie = props => {
    return (
        <div>
            <p>Tytuł: {props.title}</p>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>
        </div>
    );
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
}

Movie.defaultProps = {
    title: "MovieTitle",
    year: "MovieYear",
    duration: 0
}

export default Movie;

