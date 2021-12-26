import { all } from 'redux-saga/effects'
import authSaga from './authSaga'
import locationSaga from './locationSage'
import usersSaga from './usersSaga'

export default function* rootSaga() {
  yield all([
    authSaga(),
    locationSaga(),
    usersSaga()
  ])
}