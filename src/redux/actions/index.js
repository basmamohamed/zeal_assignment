import { LOGIN_LOADER, REGISTER_LOADER, USERS_LOADER, UPDATE_USERS_LOADER, LOCATION_LOADER, DELETE_LOCATION_LOADER } from "../util/constants";

export const login = (payload,response) => {
    return {
        type: LOGIN_LOADER,
        payload,
        response
    }
}

export const register = (payload, response) => {
    return {
        type: REGISTER_LOADER,
        payload,
        response
    }
}

export const getUsers = (payload, response) => {
    return {
        type: USERS_LOADER,
        payload,
        response
    }
}

export const updateUser = (payload, response) => {
    return {
        type: UPDATE_USERS_LOADER,
        payload,
        response
    }
}

export const getLocations = (payload, response) => {
    return {
        type: LOCATION_LOADER,
        payload,
        response
    }
}

export const deleteLocation = (payload, response) => {
    return {
        type: DELETE_LOCATION_LOADER,
        payload,
        response
    }
}