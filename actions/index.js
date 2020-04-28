import {
  ADD_NEW_TASK,
  TOGGLE_ONE_TASK,
  ADD_MOVIES,
  FETCH_FAILED,
  FETCH_MOVIES,
  FETCH_SUCCESS,
} from './actionTypes';
let newTaskId = 0;
export const addNewTask = inputTaskName => {
  return {
    type: ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: inputTaskName,
  };
};

export const toggleTask = taskID => {
  return {
    type: TOGGLE_ONE_TASK,
    taskId: taskID,
  };
};

export const addMovieAction = newMovies => {
  return {
    type: ADD_MOVIES,
    newMovies,
  };
};

export const fetchMovieAction = sort => {
  return {
    type: FETCH_MOVIES,
    sort,
  };
};
export const fetchMovieSuccessAction = receivedMovies => {
  return {
    type: FETCH_SUCCESS,
    receivedMovies,
  };
};
export const fetchMovieFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
