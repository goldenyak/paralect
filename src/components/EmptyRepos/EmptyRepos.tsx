import React from 'react';
import iconEmptyRepos from "../../images/iconEmptyRepos.png";
import e from "./EmptyRepos.module.css"

export const EmptyRepos = () => {
    return (
        <div className={e.emptyContainer}>
            <img style={{width: '76px', height: '62px'}} src={iconEmptyRepos}/>
            <span> Repository list is empty </span>
        </div>
    );
};