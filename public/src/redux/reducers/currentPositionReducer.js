import { SET_CURRENT_POSITION } from '../types';

export const currentPositionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_POSITION:
      return { ...action.payload };
    default:
      return state;
  }
};
