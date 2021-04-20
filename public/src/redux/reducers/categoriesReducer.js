import { SET_CATEGORY } from '../types';

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return [...action.payload];
    default:
      return state;
  }
};
