import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './userTypes';

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                loading: true,
                data: [],
                error: null
            };
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                data: null,
                error: action.payload
            };
        default:
            return {
                ...state
            };
    }
};