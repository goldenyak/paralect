import {reposAPI, ReposType} from "../api/repos-api";
import {ThunkType} from "./store";
import {setAppStatusAC} from "./loader-reducer";

const initialState: Array<ReposType> = []

export const setReposAC = (repos: ReposType[]) => ({type: 'repos/SET-REPOS', repos} as const);

export const reposReducer = (state: Array<ReposType> = initialState, action: ActionsReposType): Array<ReposType> => {
    switch (action.type) {
        case 'repos/SET-REPOS':
            return action.repos.map(el => ({...el}))
        default:
            return {...state}
    }
};

// thunks
export const fetchReposTC = (username: string): ThunkType => {
    return (dispatch) => {
        // dispatch(setAppStatusAC('loading'))
        reposAPI.getRepos(username)
            .then((res) => {
                dispatch(setReposAC(res.data))
                // dispatch(setAppStatusAC('succeeded'))
            })
    }
}

export type ActionsReposType = ReturnType<typeof setReposAC>

