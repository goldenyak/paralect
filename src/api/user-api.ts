import {instance} from "./instance";
import {UserType} from "./types/UserType";

// api
export const userAPI = {
    getUser(username: string) {
        return instance.get<UserType>(`users/${username}`);
    },
}

