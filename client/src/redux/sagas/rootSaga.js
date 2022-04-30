import {all} from 'redux-saga/effects'
import searchWatcher from "./searchSaga";

export default function* rootSaga() {
    yield all([
        searchWatcher()
    ])
    // code after all-effect
}
