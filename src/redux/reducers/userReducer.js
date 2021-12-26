import {
    USERS_LOADER, USERS_FAILED, USERS_SUCCESS,
} from '../util/constants'

const initialState = {
    users: [],
    isFetching: false,
    error: "",
}

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOADER:
            return {
                ...state,
                isFetching: true
            }
        case USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.data,
                error:""
            }
        case USERS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}