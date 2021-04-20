import {
  FETCH_MATERIAL,
  FETCH_CATEGORY,
  FETCH_ADDRESSES,
  FETCH_ADD_TARE,
  FETCH_ADD_COMPANY,
  GET_CURRENT_POSITION,
} from '../types';


export const fetchCategoriesAC = () => ({
  type: FETCH_CATEGORY,
});

export const getCurrentPositionAC = () => ({
  type: GET_CURRENT_POSITION,
});

export const fetchAddressesAC = (payload) => ({
  type: FETCH_ADDRESSES,
  payload
});

export const fetchAddCompanyAC = (payload) => ({
  type: FETCH_ADD_COMPANY,
  payload
})

export const addTareAC = (payload) => ({
  type: FETCH_ADD_TARE,
  payload
});

export const fetchMaterialsAC = () => ({
  type: FETCH_MATERIAL,
});
