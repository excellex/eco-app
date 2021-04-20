import { FIND_ADDRESS } from '../types';

export function addressReducer(state =[], action){
  switch (action.type) {
    case FIND_ADDRESS:
      return [...action.payload]
    
    default:
      return state
  }
}
