import {ADD_TODO} from "../types/todo.types";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload,
            ]

        default:
            return state
    }
}
export default todoReducer
