import { BUY_CAKE } from './cakeTypes'

const initialState = {
    numberOfCake: 10
};

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payload
            };
        default:
            return state;
    }
}