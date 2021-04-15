import { ADD_COMPANY } from "../types";

export function addCompanyReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMPANY:
      return [...action.payload];
    default:
      return state;
  }
}
