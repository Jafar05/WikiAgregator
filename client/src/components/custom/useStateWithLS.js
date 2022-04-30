import {useEffect, useState} from "react";

function useStateWithLS(initState, localStorageKey) {

    const dataFromLS = JSON.parse(window.localStorage.getItem(localStorageKey))

    const data = dataFromLS ? dataFromLS : initState

    const [results, setResults] = useState(data);

    useEffect(() => {
        window.localStorage.setItem(localStorageKey, JSON.stringify(results))
    },[results[0]])


    return [results, setResults]
};

export default useStateWithLS;
