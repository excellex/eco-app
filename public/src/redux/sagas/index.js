import { all } from 'redux-saga/effects';
import tareWatcher from './tareSaga';
import addressWatcher from './addressSaga';

export default function* Saga() {
  yield all([
    tareWatcher(), addressWatcher()
  ])
};
