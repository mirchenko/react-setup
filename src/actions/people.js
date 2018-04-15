import axios from 'axios';

import {
  REQUEST_FETCH_PEOPLE,
  RECEIVE_FETCH_PEOPLE
} from './types';


export const fetchPeople = () => dispatch => {
  dispatch({ type: REQUEST_FETCH_PEOPLE });
  axios.get('https://swapi.co/api/people/')
    .then(res => dispatch({ type: RECEIVE_FETCH_PEOPLE, payload: res.data.results }));
};