import React, {useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import u from "./UserProfile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import iconFollowers from "../../images/iconFollowers.png";
import iconFollowing from "../../images/iconFollowing.png";
import {RepoElement} from "../RepoElement/RepoElement";
import {ReposType} from "../../api/repos-api";
import Pagination from "../Pagination/Pagination";
import {fetchUserTC} from "../../redux/user-reducer";
import {useParams} from "react-router-dom";
import {fetchReposTC} from "../../redux/repos-reducer";
import {EmptyStatus} from "../EmptyStatus/EmptyStatus";

export const UserProfile = () => {

    const {avatar, name, login, url, followers, following} = useSelector<AppRootStateType, any>(state => state.user);
    const repos: ReposType[] = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos);

    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(5);

    const dispatch = useDispatch();
    const params = useParams();

    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const currentRepo: ReposType[] = repos.length ? repos.slice(firstRepoIndex, lastRepoIndex) : [];

    const handlerPaginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    const handlerNextPage = () => {
        setCurrentPage(prev => prev + 1)
    }
    const handlerPrevPage = () => {
        setCurrentPage(prev => prev - 1)
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUserTC(params.username))
        // @ts-ignore
        dispatch(fetchReposTC(params.username))
    }, [params.username])

    if (!name) {
        return <EmptyStatus/>
    }

    return (
        <>
            <div className={u.mainContent}>
                <div className={u.contentLeft}>
                    <img className={u.contentLeft_image} src={avatar} alt='userAvatar'/>
                    <h1 className={u.contentLeft_name}>{name}</h1>
                    <a href={url} target='_blank'>
                        <h3 className={u.contentLeft_login}>{login}</h3>
                    </a>

                    <div className={u.subscriptionBlock}>
                        <div className={u.followers}>
                            <img className={u.icon} src={iconFollowers} alt='iconFollowers'/>
                            <span>{followers} followers</span>
                        </div>
                        <div className={u.following}>
                            <img className={u.icon} src={iconFollowing} alt='iconFollowing'/>
                            <span>{following} following</span>
                        </div>
                    </div>
                </div>
                <div className={u.contentRight}>
                    <RepoElement repos={currentRepo}/>
                    <Pagination reposPerPage={reposPerPage}
                                totalRepos={repos.length}
                                handlerPaginate={handlerPaginate}
                                handlerNextPage={handlerNextPage}
                                handlerPrevPage={handlerPrevPage}/>
                </div>
            </div>
        </>
    );
};
