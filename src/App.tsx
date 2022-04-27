import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {InitialPage} from "./pages/InitialPage/InitialPage";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {UserProfile} from "./components/UserProfile/UserProfile";
import {Header} from "./components/Header/Header";
import {InitialStatus} from "./components/InitialStatus/InitialStatus";

export const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Header/>
                <Routes>
                    <Route path="/" element={<InitialStatus/>}/>
                    <Route path='/:username' element={<UserProfile/>}/>
                </Routes>
            </Provider>
        </div>
    );
}

