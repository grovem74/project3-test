import React from 'react';
import { MovieWrapper } from '../styles'

// normally don't destructure with this many items
const MovieCard = (props) => {

    return (

        <MovieWrapper>
            {/* <img src={props.backdrop} alt={props.title} /> */}
            <h3>{props.title}</h3>
            <h4>{props.release}</h4>
            <p>{props.description}</p>
            <img src={props.poster} alt={props.title} />
            <p>{props.movieID}</p>
        </MovieWrapper>

    )
}

export default MovieCard;