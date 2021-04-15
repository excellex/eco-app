import {
  ADD_CATEGORY,
  ADD_MATERIAL,
  FIND_ADRESS,
  ADD_COMPANY,
  ADD_BARCODE,
  GET_RECEPTION_POINTS,
  ADD_CURRENT_POSITION,
} from '../types';

import {
  categoriesURL,
  addPlaceURL,
  materialsURL
} from '../../utils/fetchURL';

export const fetchFindAC = (parametr) => {
  return (dispatch) => {
    fetch(categoriesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parametr),
    })
      .then((res) => res.json())
      .then((res) => dispatch(findAdressAC(res.places)));
  };
};

export const fetchAddCompanyAC = (parametr) => {
  return (dispatch) => {
    fetch(addPlaceURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parametr),
    }).then((response) => response.json());
    // .then((data) => console.log(data))
  };
};

export const fetchAddCategoryAC = (param) => {
  return (dispatch) => {
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((data) => dispatch(getCatListAC(data)));
  };
};

export const fetchAddMaterialAC = () => {
  return (dispatch) => {
    fetch(materialsURL)
      .then((response) => response.json())
      .then((data) => dispatch(getMatListAC(data)));
  };
};

export const addCompanyAC = (payload) => ({
  type: ADD_COMPANY,
  payload,
});

export const findAdressAC = (payload) => ({
  type: FIND_ADRESS,
  payload,
});

export const getCatListAC = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});

export const getMatListAC = (payload) => ({
  type: ADD_MATERIAL,
  payload,
});

export const addBarcodeAC = (payload) => ({
  type: ADD_BARCODE,
  payload,
});

export const getReceptionPoints = (payload) => ({
  type: GET_RECEPTION_POINTS,
  payload,
});

export const addCurrentPositionAC = (payload) => ({
  type: ADD_CURRENT_POSITION,
  payload
});
