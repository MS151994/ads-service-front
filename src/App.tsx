import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Map} from "./components/Map/Map";
import {SearchContext} from './contexts/search.context';

export const App = () => {

    const [search, setSearch] = useState('');

    return (
        <div className="App">
            <SearchContext.Provider value={{setSearch, search}}>
                <Header/>
                <Map/>
            </SearchContext.Provider>
        </div>
    );
}

