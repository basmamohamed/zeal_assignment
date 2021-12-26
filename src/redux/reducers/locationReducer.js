import {
    LOCATION_LOADER, LOCATION_FAILED, LOCATION_SUCCESS,
    DELETE_LOCATION_LOADER, DELETE_LOCATION_FAILED, DELETE_LOCATION_SUCCESS
} from '../util/constants'

const initialState = {
    locations: [],
    isFetching: false,
    error: "",
    isDeleting:false
}

export default locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_LOADER:
            return {
                ...state,
                locations: [],
                isFetching: true
            }
        case LOCATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
                error:""
            }
        case LOCATION_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case DELETE_LOCATION_LOADER:
            return {
                ...state,
                isDeleting: true
            }
        case DELETE_LOCATION_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: "",
                
            }
        case DELETE_LOCATION_FAILED:
            return {
                ...state,
                isDeleting: false,
                error: action.error
            }
        default:
            return state
    }
}