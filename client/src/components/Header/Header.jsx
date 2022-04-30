import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getResponse} from "../../redux/thunk/resultAC";
import Pagination from "../Pagination/Pagination";
import useStateWithLS from "../custom/useStateWithLS";



const Header = () => {



    const wiki = useSelector((store) => store.title)
    const [search, setSearch] = useState("");
    const [results, setResults] = useStateWithLS([], 'resultWiki');
    const [searchInfo, setSearchInfo] = useState({})
    const [pages, setPages] = useState(1)
    const [countPages, setCountPages] = useState(10)


    const dispatch = useDispatch()

    const lastIndex = pages * countPages
    const firstIndex = lastIndex - countPages
    const currentIndex = results.slice(firstIndex, lastIndex)

    const clickHandler = (e) => {
        e.preventDefault()
        for(let i = 0; i < currentIndex.length; i++) {
            return currentIndex[i]
        }
    }

    const paginate = pageNumber => setPages(pageNumber)
    const nextPage = () => setPages(prev => prev + 1)
    const prevPage = () => setPages(prev => prev - 1)

    useEffect(() =>{
       dispatch(getResponse(search))
    },[search])

    const clearAllWiki = () => {
        setResults([])
    }

    const handleSearch = async e => {
        e.preventDefault();
        if(search === "") return;

        setResults(wiki.query.search)
        setSearchInfo(wiki.query.searchinfo)
    }

    return (
        <>
            <header>
                <h1 className="h1">Wikipedia Thunk</h1>
                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="Поиск"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type="button" onClick={clearAllWiki} className="btn btn-danger">clear all</button>
                </form>
                {(searchInfo.totalhits) ? <p>Search Results:{searchInfo.totalhits} </p> : ''}
            </header>
            <div className="results">
                {currentIndex.map((result, index) => {
                    const url = `https://en.wikipedia.org/?curid=${result.pageid}`

                    return (
                        <div className="result" key={result.size}>
                            <h3>{result.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: result.snippet}}>
                            </p>
                            <a href={url} target="__blank" rol="nofollow">Детальнее...</a>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={clickHandler}>
                                Посмотреть пост
                            </button>
                        </div>
                    )
                })}
            </div>


            {currentIndex.map((result,i) => {
                return(
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true" key={result.pageid}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{result.title}</h5>
                                </div>
                                <div className="modal-body">
                                    <p dangerouslySetInnerHTML={{__html: result.snippet}}>
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


            <Pagination
                countPages={countPages}
                totalResult={results.length}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
                className="pagination"
            />
        </>
    );
};

export default Header;
