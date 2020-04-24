import {connect} from 'react-redux';
import {addNewTask, toggleTask} from '../actions';
import TaskListComponent from '../components/TaskListComponent';
const mapStateToProps = state => {
  //alert(JSON.stringify(state));
  return {
    tasks: state.taskReducers,
  };
};

export default connect(mapStateToProps)(TaskListComponent);
