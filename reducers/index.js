import {combineReducers} from 'redux';
import taskReducers from './taskReducers';
import MovieReducers from './MovieReducers';

const allReducers = combineReducers({taskReducers, MovieReducers});
export default allReducers;
