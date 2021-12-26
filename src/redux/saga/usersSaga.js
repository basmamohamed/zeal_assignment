import { call, put, takeEvery } from 'redux-saga/effects'
import ajax from '../util/ajax';
import * as types from '../util/constants'

function* getUserGenerator(action) {
    try {
        const response = yield call(ajax.getUsers, action.payload)
        console.log("res", response);
        yield put({ type: types.USERS_SUCCESS, response });
    } catch (e) {
        yield put({ type: types.USERS_FAILED, e });
    }
}

function* updateUserGenerator(action) {
    try {
        const response = yield call(ajax.updateUsers, action.payload)
        console.log("res", response);
        yield put({ type: types.UPDATE_USERS_SUCCESS, response });
    } catch (e) {
        yield put({ type: types.UPDATE_USERS_FAILED, e });
    }
}

function* authSaga() {
    yield takeEvery(types.USERS_LOADER, getUserGenerator);
    yield takeEvery(types.UPDATE_USERS_LOADER, updateUserGenerator)
}

export default authSaga;