import {combineReducers} from "redux";
import wikiReducer from "./wikiReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    title: wikiReducer,
    todo: todoReducer,
})


export default rootReducer;
