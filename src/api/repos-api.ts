import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/'
})

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