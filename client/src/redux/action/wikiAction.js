import {GET_TITLE} from "../types/wiki.types";

export const getTitle = (value) => {
   return {
       type: GET_TITLE,
       payload: value
   }
}

