import React from 'react';
import r from "./RepoElement.module.css";
import {ReposType} from "../../api/repos-api";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

type RepoElementPropsType = {
    repos: Array<ReposType>
}

export const RepoElement: React.FC<RepoElementPropsType> = ({repos}) => {

    const {public_repos} = useSelector<AppRootStateType, any>(state => state.user);

    return (
        <div>
            <h2>Repositories ({public_repos})</h2>
            {
                repos.length && repos.map((repo: any) => (
                    <div key={repo.id} className={r.repoWrapper}>
                        <h4>{repo.name}</h4>
                        <span>{repo.description}</span>
                    </div>
                ))
            }
        </div>
    );
};
