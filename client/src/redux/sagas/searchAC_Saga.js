import {GET_TITLE_SAGA} from "../types/wiki.types";

export const getTitleSaga = (value) => {
    return {
        type: GET_TITLE_SAGA,
        payload: value
    }
}

