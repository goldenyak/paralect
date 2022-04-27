import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/'
})

// api
export const userAPI = {
    getUser(username: string) {
        return instance.get<UserType>(`users/${username}`);
    },
}

// types
export type UserType = {
    avatar_url: string
    name: string
    login: string
    html_url: string
    followers: number
    following: number
    public_repos: number
}