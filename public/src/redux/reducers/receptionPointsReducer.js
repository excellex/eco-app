import { GET_RECEPTION_POINTS } from '../types';

export function receptionPointsReducer(state = {}, action) {
  switch (action.type) {
    case GET_RECEPTION_POINTS:
      return {...action.payload}
    default:
      return state;
  }
}
