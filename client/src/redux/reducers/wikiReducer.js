import {GET_TITLE} from "../types/wiki.types";

const wikiReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_TITLE:
            return payload

        default:
            return state
    }
}


export default wikiReducer
