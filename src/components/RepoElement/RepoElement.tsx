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
    console.log(repos)

    return (
        <div>
            <h2>Repositories ({public_repos})</h2>
            {
                repos.length && repos.map((repo: any) => (
                    <div key={repo.id} className={r.repoWrapper}>
                        <a href={repo.html_url} target='_blank'>{repo.name}</a>
                        <span>{repo.description}</span>
                    </div>
                ))
            }
        </div>
    );
};
