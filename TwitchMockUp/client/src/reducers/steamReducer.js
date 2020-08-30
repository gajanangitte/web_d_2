import _ from 'lodash';
import {
  FETCH_STEAM,
  FETCH_STEAMS,
  CREATE_STEAM,
  EDIT_STEAM,
  DELETE_STEAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STEAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STEAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STEAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STEAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STEAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
