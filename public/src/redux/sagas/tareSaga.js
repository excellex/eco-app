import { put, takeEvery } from 'redux-saga/effects';
import { setReceptionPointsAC, setMaterialsAC, setCategoriesAC } from '../actions';
import { FETCH_ADD_TARE, FETCH_CATEGORY, FETCH_MATERIAL } from '../types';
import { apiGet, apiPost } from '../../utils/fetches';
import { addTareURL, categoriesURL, materialsURL } from '../../utils/fetchURL';

function* tareWorker(action) {
  const response = yield apiPost(addTareURL, action.payload);
  yield put(setReceptionPointsAC(response))
}

function* materialWorker() {
  const material = yield apiGet(materialsURL);
  yield put(setMaterialsAC(material))
}

function* categoryWorker() {
  const category = yield apiGet(categoriesURL);
  yield put(setCategoriesAC(category))
}

export default function* watcher() {
  yield takeEvery(FETCH_ADD_TARE, tareWorker)
  yield takeEvery(FETCH_MATERIAL, materialWorker)
  yield takeEvery(FETCH_CATEGORY, categoryWorker)
};

