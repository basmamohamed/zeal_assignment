import { call, put, takeEvery } from 'redux-saga/effects'
import ajax from '../util/ajax';
import * as types from '../util/constants'

function* getLocationGenerator(action) {
    try {
        const response = yield call(ajax.getLocations, action.payload)
        console.log("res", response);
        yield put({ type: types.LOCATION_SUCCESS, response });
    } catch (e) {
        yield put({ type: types.LOCATION_FAILED, e });
    }
}

function* deleteLocationGenerator(action) {
    try {
        const response = yield call(ajax.deleteLocation, action.payload)
        console.log("res", response);
        yield put({ type: types.DELETE_LOCATION_SUCCESS, response });
    } catch (e) {
        yield put({ type: types.DELETE_LOCATION_FAILED, e });
    }
}

function* authSaga() {
    yield takeEvery(types.LOCATION_LOADER, getLocationGenerator);
    yield takeEvery(types.DELETE_LOCATION_LOADER, deleteLocationGenerator)
}

export default authSaga;