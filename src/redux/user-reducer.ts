import {Dispatch} from "redux";
import {userAPI, UserType} from "../api/user-api";
import {AppActionType, AppRootStateType, ThunkType} from "./store";
import {ThunkAction} from "redux-thunk";
import {setAppStatusAC} from "./loader-reducer";
import {fetchReposTC} from "./repos-reducer";
import {reposAPI} from "../api/repos-api";

const initialState: UserType = {
    avatar_url: '',
    name: '',
    login: '',
    html_url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
};
// actionCreators
// export const setUserAC = (avatar_url: string, name: string, login: string, html_url: string, folllowers: number, following: number, public_repos: number) => ({
export const setUserAC = ({
                              avatar_url,
                              name,
                              login,
                              html_url,
                              followers,
                              following,
                              public_repos
                          }: UserType) => ({
    type: 'user/SET-USER',
    avatar_url,
    name,
    login,
    html_url,
    followers,
    following,
    public_repos
} as const);

// reducers
export const userReducer = (state = initialState, action: ActionsUserType): UserType => {
    switch (action.type) {
        case 'user/SET-USER':
            return {
                avatar_url: action.avatar_url,
                name: action.name,
                login: action.login,
                html_url: action.html_url,
                followers: action.followers,
                following: action.following,
                public_repos: action.public_repos
            }
        default:
            return {...state}
    }
};

// thunks
export const fetchUserTC = (username: string): ThunkType => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    const {data} = await userAPI.getUser(username)
    // dispatch(setUserAC(res.data.avatar_url, res.data.name, res.data.login, res.data.html_url, res.data.followers, res.data.following, res.data.public_repos))
    dispatch(setUserAC(data))
    await dispatch(fetchReposTC(username))
    dispatch(setAppStatusAC('succeeded'))
}

// types
export type ActionsUserType = ReturnType<typeof setUserAC>
