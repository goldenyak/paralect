import React, {useEffect, useState} from 'react';
import u from "./UserProfile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store, useAppDispatch} from "../../redux/store";
import iconFollowers from "../../images/iconFollowers.png";
import iconFollowing from "../../images/iconFollowing.png";
import {ReposType} from "../../api/repos-api";
import Pagination from "../Pagination/Pagination";
import {fetchUserTC} from "../../redux/user-reducer";
import {useParams} from "react-router-dom";
import {EmptyStatus} from "../EmptyStatus/EmptyStatus";
import {EmptyRepos} from "../EmptyRepos/EmptyRepos";
import {Loader} from "../Loader/Loader";
import {UserType} from "../../api/user-api";
import { ReposList } from '../ReposList/ReposList';

export const UserProfile = () => {
    const {
        avatar_url,
        name,
        login,
        html_url,
        followers,
        following
    } = useSelector<AppRootStateType, UserType>(state => state.user);
    const repos: ReposType[] = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos);
    const status = useSelector<AppRootStateType>(state => state.loading.status)

    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setReposPerPage] = useState(5);

    const dispatch = useAppDispatch();
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
    console.log(repos)
    useEffect(() => {
        if (params.username) {
            dispatch(fetchUserTC(params.username))
        }
    }, [params.username])

    if (status === 'loading') {
        return <Loader/>
    }

    if (!name) {
        return <EmptyStatus/>
    }

    return (
        <div className={u.mainContent}>
            <div className={u.contentLeft}>
                <img className={u.contentLeft_image} src={avatar_url} alt='userAvatar'/>
                <h1 className={u.contentLeft_name}>{name}</h1>
                <a href={html_url} target='_blank'>
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
                {repos.length ? <>
                        <ReposList repos={currentRepo}/>
                        <Pagination reposPerPage={reposPerPage}
                                    totalRepos={repos.length}
                                    handlerPaginate={handlerPaginate}
                                    handlerNextPage={handlerNextPage}
                                    handlerPrevPage={handlerPrevPage}
                                    currentPage={currentPage}
                                    firstRepoIndex={firstRepoIndex}
                                    lastRepoIndex={lastRepoIndex}
                        />
                    </>
                    : <EmptyRepos/>}
            </div>
        </div>
    );
};
