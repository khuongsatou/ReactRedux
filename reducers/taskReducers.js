import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from '../actions/actionTypes';
// import {  } from "../actions/index";
const taskReducers = (tasks = [], action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      //create a object new , array include old and new
      return [
        ...tasks,
        {
          taskId: action.taskId,
          taskName: action.taskName,
          completed: false,
        },
      ];
    case TOGGLE_ONE_TASK:
      //create a object new , array include old and new
      return tasks.map(task =>
        task.taskID === action.taskID
          ? {...task, completed: !task.completed}
          : task,
      );
    default:
      return tasks;
  }
};
export default taskReducers;
