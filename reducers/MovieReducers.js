import {
  ADD_MOVIES,
  FETCH_MOVIES,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../actions/actionTypes';
// import {  } from "../actions/index";
const movieReducers = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      //create a object new , array include old and new
      return action.receivedMovies;
    case FETCH_FAILED:
      //create a object new , array include old and new
      return action.error;
    case ADD_MOVIES:
      //create a object new , array include old and new
      return [...movies, action.newMovies];
    default:
      //console.log(action.type);
      return movies;
  }
};
export default movieReducers;
