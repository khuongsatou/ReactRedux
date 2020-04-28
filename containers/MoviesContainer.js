import {connect} from 'react-redux';
import MoviesComponent from '../components/MoviesComponent';
import {
  addMovieAction,
  fetchMovieAction,
  fetchMovieFailedAction,
  fetchMovieSuccessAction,
} from '../actions';
const mapStateToProps = state => {
  return {
    movies: state.movieReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => {
      dispatch(addMovieAction(movie));
    },
    fetchMovie: sort => {
      dispatch(fetchMovieAction(sort));
    },
    fetchMovieSuccess: receivedMovies => {
      dispatch(fetchMovieSuccessAction(receivedMovies));
    },
    fetchMovieFailed: error => {
      dispatch(fetchMovieFailedAction(error));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesComponent);
