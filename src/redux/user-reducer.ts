import {Dispatch} from "redux";
import {userAPI} from "../api/user-api";
import {AppActionType, AppRootStateType, ThunkType} from "./store";
import {ThunkAction} from "redux-thunk";
import {setAppStatusAC} from "./loader-reducer";
import {fetchReposTC} from "./repos-reducer";

export type InitialStateType = {
    avatar: string
    name: string
    login: string
    url: string
    followers: number
    following: number
    public_repos: number
};

const initialState: InitialStateType = {
    avatar: '',
    name: '',
    login: '',
    url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
};

export const setUserAC = (avatar: string, name: string, login: string, url: string, folllowers: number, following: number, public_repos: number) => ({
    type: 'user/SET-USER',
    avatar,
    name,
    login,
    url,
    folllowers,
    following,
    public_repos
} as const);

export const userReducer = (state: InitialStateType = initialState, action: ActionsUserType): InitialStateType => {
    switch (action.type) {
        case 'user/SET-USER':
            return {
                ...state,
                avatar: action.avatar,
                name: action.name,
                login: action.login,
                url: action.url,
                followers: action.folllowers,
                following: action.following,
                public_repos: action.public_repos
            }
        default:
            return {...state}
    }
};

// thunks
export const fetchUserTC = (username: string): ThunkType => {
    return (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        userAPI.getUser(username)
            .then((res) => {
                dispatch(fetchReposTC(username))
                dispatch(setUserAC(res.data.avatar_url, res.data.name, res.data.login, res.data.html_url, res.data.followers, res.data.following, res.data.public_repos))
                dispatch(setAppStatusAC('succeeded'))
            })
    }
}


export type ActionsUserType = ReturnType<typeof setUserAC>
