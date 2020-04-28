import {combineReducers} from 'redux';
// import taskReducers from './taskReducers';
import MovieReducers from './MovieReducers';

const allReducers = combineReducers({MovieReducers});
export default allReducers;
