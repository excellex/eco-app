import { ADD_MATERIAL } from "../types";

export const getMatListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MATERIAL:
      return [...action.payload];

    default:
      return state;
  }
};
