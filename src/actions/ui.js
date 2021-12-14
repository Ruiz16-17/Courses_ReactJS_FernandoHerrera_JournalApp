import { types } from "../types/types"

export const setErrorAction = (errorMessage) => ({
    type: types.uiSetMessageError,
    payload: errorMessage
})

export const removeErrorAction = () => ({
    type: types.uiRemoveMessageError,
})