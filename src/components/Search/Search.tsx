import React from 'react';
import s from "./Search.module.css";
import iconSearch from "../../images/iconSearch.png";

export const Search = () => {
    return (
        <label className={s.label}>
            <img className={s.iconSearch} src={iconSearch} alt='search-icon'/>
            <input className={s.input} type='search' placeholder='Enter GitHub username'/>
        </label>
    );
};

