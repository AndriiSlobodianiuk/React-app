import axios from 'axios';

const API = '2bfc2a645701761d2e5ce56e2b5eb82d';
const LOCAL = 'en-US';
const PAGE = '1';
const BASEURL = 'https://api.themoviedb.org/3/';

export const getMoviesByCategory = category =>
  axios
    .get(
      `${BASEURL}movie/${category}?api_key=${API}&language=${LOCAL}&page=${PAGE}`
    )
    .then(request => request.data.results)
    .catch(error => new Error(error));

export const getFullMovieInfo = id =>
  axios
    .get(`${BASEURL}movie/${id}?api_key=${API}&language=${LOCAL}`)
    .then(request => request.data)
    .catch(error => new Error(error));

export const searchMovie = query =>
  axios
    .get(
      `${BASEURL}search/movie?api_key=${API}&language=${LOCAL}&page=${PAGE}&include_adult=false&query=${query}`
    )
    .then(request => request.data.results)
    .catch(error => new Error(error));

export const getPoster = query => `https://image.tmdb.org/t/p/w500${query}`;

export const createAction = type => (payload, meta = null) => ({
  type,
  payload,
  meta
});
