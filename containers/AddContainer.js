import {connect} from 'react-redux';
import {addNewTask, toggleTask} from '../actions/';
import AddComponents from '../components/AddComponents';

const mapStateToProps = state => {
  return {
    tasks: !state.taskReducers ? [] : state.taskReducers,
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
)(AddComponents);
