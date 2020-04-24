import {connect} from 'react-redux';
import {addNewTask, toggleTask} from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

export default connect()(TaskItemComponent);
