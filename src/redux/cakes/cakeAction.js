import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (val = 1) => {
    return {
        type: BUY_CAKE,
        payload: val
    }
}