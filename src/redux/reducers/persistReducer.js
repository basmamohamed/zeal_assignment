import {
    LOGIN_LOADER, LOGIN_SUCCESS, LOGIN_FAILED,
    REGISTER_FAILED, REGISTER_LOADER, REGISTER_SUCCESS
} from '../util/constants'

const initialState = {
    token: null,
    isFetching: false,
    error: "",
}

export default persistReducer = (state = initialState, action) => {
    console.log("action",action);
    switch (action.type) {
        case LOGIN_LOADER:
            return {
                ...state,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.data,
                error: ""
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case REGISTER_LOADER:
            return {
                ...state,
                isFetching: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.data,
                error: ""
            }
        case REGISTER_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}