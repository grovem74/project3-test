import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'materialize-css';
import { Container, Row, Col } from 'react-materialize';

import MovieCard from './components/MovieCard';
import TVCard from './components/TVCard';
import SearchBar from './components/SearchBar';
import SearchBar2 from './components/SearchBar2';
import API from './utils/API'

const App = () => {

  const [state, setState] = useState({
    movie: '',
    release: '',
    description: '',
    poster: '',
    movieID: null,
    backdrop: ''
  })

  //destructuring to use above values directly
  const { movie, release, description, poster, movieID, backdrop } = state;

  const posterURL = 'https://image.tmdb.org/t/p/w500/';
  const backdropURL = 'https://image.tmdb.org/t/p/w500/';

  const movieSearch = title => {
    if (!title) {
      return alert("Enter a movie title.");
    }

    API.movieSearch(movie)
      .then(res => {
        console.log(res);
        setState({
          movie: res.data.results[0].title,
          release: res.data.results[0].release_date,
          description: res.data.results[0].overview,
          poster: `${posterURL}` + res.data.results[0].poster_path,
          movieID: res.data.results[0].id,
          backdrop: `${backdropURL}` + res.data.results[0].backdrop_path
        })
      })
      .catch(err => console.log(err))
  }

  const imageSearch = () => {
    API.imageSearch(movieID)
      .then(res => {
        console.log(res);
        setState({

        })
      })
      .catch(err => console.log(err))
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    movieSearch(movie);
  }

  return (
    <Container>
      <Row>
        <Col m={3}></Col>
        <Col m={6}>
          <SearchBar
            movie={movie}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
          <MovieCard
            title={movie}
            release={moment(release, 'YYYY-MM-DD').format('MMM Do YYYY')}
            description={description}
            poster={poster}
            movieID={movieID}
            backdrop={backdrop}
          />
          <SearchBar2
            movie={movie}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
          <TVCard
            title={movie}
            release={moment(release, 'YYYY-MM-DD').format('MMM Do YYYY')}
            description={description}
            poster={poster}
            movieID={movieID}
            backdrop={backdrop}
          />
        </Col>
        <Col m={3}></Col>
      </Row>
    </Container>
  );
}

export default App;
