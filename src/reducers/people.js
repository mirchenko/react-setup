import {
  REQUEST_FETCH_PEOPLE,
  RECEIVE_FETCH_PEOPLE
} from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FETCH_PEOPLE: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_FETCH_PEOPLE: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
}