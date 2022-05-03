import {reposAPI, ReposType} from "../api/repos-api";
import {ThunkType} from "./store";

const initialState: Array<ReposType> = []

// actionCreators
export const setReposAC = (repos: ReposType[]) => ({type: 'repos/SET-REPOS', repos} as const);

// reducers
export const reposReducer = (state: ReposType[] = initialState, action: ActionsReposType): ReposType[] => {
    switch (action.type) {
        case 'repos/SET-REPOS':
            return action.repos.map(el => ({...el}))
        default:
            return {...state}
    }
};

// thunks
export const fetchReposTC = (username: string): ThunkType => async dispatch => {
    const res = await reposAPI.getRepos(username)
    dispatch(setReposAC(res.data))
}

// types
export type ActionsReposType = ReturnType<typeof setReposAC>

