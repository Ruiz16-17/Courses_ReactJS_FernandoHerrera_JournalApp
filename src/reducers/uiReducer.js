import { types } from "../types/types";

const initialState = {
    loading: false,
    messageError: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetMessageError:
            return {
                ...state,
                messageError: action.payload
            }

        case types.uiRemoveMessageError:
            return {
                ...state,
                messageError: null
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}