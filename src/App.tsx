import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Map} from "./components/Map/Map";
import {SearchContext} from './contexts/search.context';
import {Route, Routes} from "react-router-dom";
import {AddForm} from "./components/AddForm/AddForm";

export const App = () => {

    const [search, setSearch] = useState('');

    return (
        <div className="App">
            <SearchContext.Provider value={{setSearch, search}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Map/>}/>
                    <Route path="/add" element={<AddForm/>}/>
                </Routes>

            </SearchContext.Provider>
        </div>
    );
}

