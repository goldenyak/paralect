import React from 'react';
import h from "./Header.module.css";
import logo from "../../images/logo.png"
import {Search} from "../Search/Search";

export const Header = () => {
    return (
        <div className={h.header}>
            <img src={logo} alt='logotype'/>
            <Search/>
        </div>
    );
};

