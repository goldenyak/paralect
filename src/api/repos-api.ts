import {instance} from "./instance";

// api
export const reposAPI = {
    getRepos(username: string) {
        return instance.get<ReposType[]>(`users/${username}/repos`);
    },
}

// types
export type ReposType = {
    name: string
    description: string
    html_url: string
    id: number
}