import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {InitialPage} from "./pages/InitialPage/InitialPage";
import {Provider} from "react-redux";
import {store} from "./redux/store";

export const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<InitialPage/>}/>
                </Routes>
            </Provider>

        </div>
);
}

