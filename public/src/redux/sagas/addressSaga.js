import {  put, takeEvery } from 'redux-saga/effects';
import {  setCurrentPositionAC, setReceptionPointsAC } from '../actions';
import { FETCH_ADDRESSES, FETCH_ADD_COMPANY, GET_CURRENT_POSITION} from '../types';
import {  apiPost } from '../../utils/fetches';
import {  addPlaceURL, taresURL } from '../../utils/fetchURL';
import { location } from '../../utils/location';

function* positionWorker() {
  const position = yield location();
  yield put(setCurrentPositionAC({
    latitude: (position.coords.latitude).toString().slice(0, 8),
    longitude: (position.coords.longitude).toString().slice(0, 8),
  }))
}

function* addressWorker(action) {
  const spots = yield apiPost(taresURL, action.payload);
  yield put(setReceptionPointsAC(spots))
}

function* addCompanyWorker(action) {
  const spots = yield apiPost(addPlaceURL, action.payload);
}

export default function* watcher() {
  yield takeEvery(FETCH_ADDRESSES, addressWorker)
  yield takeEvery(FETCH_ADD_COMPANY, addCompanyWorker)
  yield takeEvery(GET_CURRENT_POSITION, positionWorker)
};

