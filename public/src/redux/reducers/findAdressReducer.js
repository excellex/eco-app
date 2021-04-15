import { FIND_ADRESS } from '../types';

export function findAdressReducer(state =[], action){
  switch (action.type) {
    case FIND_ADRESS:
      return [...action.payload]
    
    default:
      return state
  }
}
