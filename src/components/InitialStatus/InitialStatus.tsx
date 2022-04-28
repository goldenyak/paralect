import React from 'react';
import iconSearchBig from "../../images/iconSearchBig.png";
import i from "./InitialStatus.module.css"
import {Loader} from "../Loader/Loader";

export const InitialStatus = () => {
    return (
        <div className={i.initContainer}>
            <img style={{width: '64px', height: '64px'}} src={iconSearchBig}/>
            <span> Start with searching a GitHub user </span>
        </div>
    );
};
