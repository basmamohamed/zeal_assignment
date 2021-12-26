import { call, put, takeEvery } from 'redux-saga/effects'
import ajax from '../util/ajax';
import * as types from '../util/constants'

function* loginGenerator(action) {
    try {
        const response = yield call(ajax.login, action.payload)
        console.log("res", response);
        yield put({ type: types.LOGIN_SUCCESS, response });
    } catch (e) {
        yield put({ type: types.LOGIN_FAILED, e });
    }
}

function* registerGenerator(action) {
    try {
        const response = yield call(ajax.register, action.payload)
        console.log("res", response);
        yield put({ type: types.REGISTER_SUCCESS, response });
    } catch (e) {
        yield put({ type: types.REGISTER_FAILED, e });
    }
}

function* authSaga() {
    yield takeEvery(types.LOGIN_LOADER, loginGenerator);
    yield takeEvery(types.REGISTER_LOADER, registerGenerator)
}

export default authSaga;