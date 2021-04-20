import { SET_BARCODE } from '../types';

export function barcodeReducer(state = '', action) {
  switch (action.type) {
    case SET_BARCODE:
      return action.payload
    default:
      return state;
  }
}
