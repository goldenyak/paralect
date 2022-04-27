import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./Search.module.css";
import iconSearch from "../../images/iconSearch.png";
import {useDispatch} from "react-redux";
import {fetchReposTC} from "../../redux/repos-reducer";
import {fetchUserTC} from "../../redux/user-reducer";
import {useNavigate} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";

export const Search = () => {

    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addInputValueHandler();
        }
    };

    const addInputValueHandler = () => {
        if (value.trim() !== '') {
            setValue('');
            navigate(`/${value}`)
        } else {
            setError('Поле не может быть пустым');
        }
    };


    return (
        <>
            <label className={s.label}>
                <img className={s.iconSearch} src={iconSearch} alt='search-icon'/>
                <input className={s.input}
                       type='search'
                       placeholder='Enter GitHub username'
                       value={value}
                       onChange={(e) => handleInput(e)}
                       onKeyPress={onKeyPressHandler}/>

            </label>
            {error ? <div style={{color: 'red', fontSize: '12px'}}>{error}</div> : null}
        </>

    );
};

