import { ADD_CURRENT_POSITION } from '../types';

export const getCurrentPositionReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENT_POSITION:
      return { ...action.payload };
    default:
      return state;
  }
};
