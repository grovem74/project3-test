import axios from 'axios'
const apiKey = process.env.REACT_APP_TMDB_API_KEY

export default {
    movieSearch: function (title) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&page=1&include_adult=false`)
    },
    imageSearch: function (movieID) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieID}/images?api_key=${apiKey}`)
    }
}




