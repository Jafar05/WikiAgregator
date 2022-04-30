import {getTitle} from "../action/wikiAction";

export const getResponse = (search) => async (dispatch) => {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&
        utf8=&format=json&origin=*&srlimit=30&srsearch=${search}`)
        .then(response => response.json())
    dispatch(getTitle(response))
}
