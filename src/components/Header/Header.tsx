import React from 'react';
import h from "./Header.module.css";
import logo from "../../images/logo.png"
import {Search} from "../Search/Search";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={h.header}>
            <Link to='/'>
                <img src={logo} alt='logotype'/>
            </Link>
            <Search/>
        </div>
    );
};

