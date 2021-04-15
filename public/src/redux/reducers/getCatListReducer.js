import { ADD_CATEGORY } from '../types';

export const getCatListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...action.payload];
    default:
      return state;
  }
};
