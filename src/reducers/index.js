import {RECEIVE_HELLOWORLD, REQUEST_HELLOWORLD} from '../actions';

export default (state = {}, {type, text}) => {
  switch (type) {
    case RECEIVE_HELLOWORLD:
      return text;
    default:
      return state;
  }
};
