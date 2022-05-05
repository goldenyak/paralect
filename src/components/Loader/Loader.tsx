import React from 'react';
import l from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={l.spinner}>
            <div className={l.bounceOne}></div>
            <div className={l.bounceTwo}></div>
        </div>
    );
};
