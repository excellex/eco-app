import {
  SET_BARCODE  ,
  SET_RECEPTION_POINTS,
  SET_CURRENT_POSITION,
  SET_MATERIAL,
  SET_CATEGORY
} from '../types';



export const setBarcodeAC = (payload) => ({
  type: SET_BARCODE,
  payload,
});

export const setCurrentPositionAC = (payload) => ({
  type: SET_CURRENT_POSITION,
  payload
});

export const setReceptionPointsAC = (payload) => ({
  type: SET_RECEPTION_POINTS,
  payload,
});

export const setMaterialsAC = (payload) => ({
  type: SET_MATERIAL,
  payload,
});

export const setCategoriesAC = (payload) => ({
  type: SET_CATEGORY,
  payload,
});
