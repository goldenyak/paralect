import React from 'react';
import iconEmptyStatus from "../../images/iconEmptyStatus.png";
import e from "./EmptyStatus.module.css"

export const EmptyStatus = () => {
    return (
        <div className={e.emptyContainer}>
            <img style={{width: '65px', height: '75px'}} src={iconEmptyStatus}/>
            <span> User not found </span>
        </div>
    );
};