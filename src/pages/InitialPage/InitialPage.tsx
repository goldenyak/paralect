import React from 'react';
import {Header} from "../../components/Header/Header";
import {InitialStatus} from "../../components/InitialStatus/InitialStatus";
import {EmptyStatus} from "../../components/EmptyStatus/EmptyStatus";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {UserProfile} from "../../components/UserProfile/UserProfile";
import {ReposType} from "../../api/repos-api";

export const InitialPage = () => {

    const {name}: any = useSelector<AppRootStateType>(state => state.user);
    const repos: ReposType[] = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos);
// route /
    // route /:user
    // request repository -> view
    return (
        <>
            {/*<Header/>*/}
            {/*{name ? <UserProfile/> : <InitialStatus/>}*/}
            {/*{!repos.length && <EmptyStatus/>}*/}
            {/*<Header/>*/}
            {/*<UserProfile/>*/}
            {/*<PaginatedItems itemsPerPage={4} />*/}
            {/*<InitialStatus/>*/}
            {/*<div>{value}</div>*/}
            {/*<EmptyStatus/>*/}
        </>
    );
};
