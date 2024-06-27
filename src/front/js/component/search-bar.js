import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/back-button.css";

export const SearchBar = () => {
    const { store, actions } = useContext(Context);
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        store.search = true;
        actions.itemSearch(search);
        console.log({ "here is the search boolean": store.search })
    };

    const handleClear = () => {
        actions.itemClear();
        setSearch('')
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            {store.items != "" ?
                <button className="search-query-clear" type="submit" onClick={handleClear}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
                :
                null
            }
            <input className={`search-query-input ${store.items.length > 0 ? 'ps-5' : 'ps-4'}`} placeholder="Search Ingredient" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={(element) => {
                if (element.key === "Enter") {
                    handleSearch();
                    !store.search; // Toggle the search state
                };
            }} />
            <button className="search-query-submit" type="submit" onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </div>
    );
};