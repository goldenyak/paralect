import {instance} from "./instance";
import {ReposType} from "./types/ReposType";

// api
export const reposAPI = {
    getRepos(username: string) {
        return instance.get<ReposType[]>(`users/${username}/repos`);
    },
}

