import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Map} from "./components/Map/Map";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Map/>
        </div>
    );
}

