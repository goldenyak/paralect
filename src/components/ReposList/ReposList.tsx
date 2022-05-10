import React from 'react';
import r from "./ReposList.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ReposType} from "../../api/types/ReposType";

type RepoElementPropsType = {
    repos: ReposType[]
}

export const ReposList: React.FC<RepoElementPropsType> = ({repos}) => {

    const {public_repos} = useSelector<AppRootStateType, any>(state => state.user);

    return (
        <div className={r.container}>
            <h2>Repositories ({public_repos})</h2>
            {
                repos.length && repos.map((repo: ReposType) => (
                    <div key={repo.id} className={r.repoWrapper}>
                        <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                        <span>{repo.description}</span>
                    </div>
                ))
            }
        </div>
    );
};
