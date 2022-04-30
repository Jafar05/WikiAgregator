import {call, put, takeEvery, takeLatest, delay} from 'redux-saga/effects'
import {GET_TITLE} from "../types/wiki.types";


const searchFetch = async(search) => {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&
        utf8=&format=json&origin=*&srlimit=30&srsearch=${search}`)
    return response.json()
}

function* searchWorker(action) {
    try {
        yield delay(500)
        const value = yield call(searchFetch, action.payload)
        yield put({type: GET_TITLE, payload: value})
    } catch (e) {
        console.log(e)
    }
}

function* searchWatcher() {
    yield takeLatest('GET_TITLE_SAGA', searchWorker)
}



export default searchWatcher;
