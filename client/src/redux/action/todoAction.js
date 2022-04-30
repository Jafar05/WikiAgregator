import {ADD_TODO} from "../types/todo.types";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        text,
        status: false,
    }
})
