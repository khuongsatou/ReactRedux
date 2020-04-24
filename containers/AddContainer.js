import {connect} from 'react-redux';
import {Alert} from 'react-native';
import {addNewTask, toggleTask} from '../actions';
import AddTaskComponent from '../components/AddTaskComponent';
const mapStateToProps = state => {
  //alert(JSON.stringify(state));
  return {
    tasks: state.taskReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: inputTaskName => {
      dispatch(addNewTask(inputTaskName));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTaskComponent);
