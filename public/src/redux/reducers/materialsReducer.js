import { SET_MATERIAL } from "../types";

export const materialsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MATERIAL:
      return [...action.payload];

    default:
      return state;
  }
};
