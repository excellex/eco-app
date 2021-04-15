import { ADD_BARCODE } from '../types';

export function addBarcodeReducer(state = [], action) {
  switch (action.type) {
    case ADD_BARCODE:
      return action.payload
    default:
      return state;
  }
}
