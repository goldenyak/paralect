import {reposAPI} from "../api/repos-api";
import {ThunkType} from "./store";
import {ReposType} from "../api/types/ReposType";

const initialState: ReposType[] = []

// actionCreators
export const setReposAC = (repos: ReposType[]) => ({
    type: 'repos/SET-REPOS',
    repos
} as const);

// reducers
export const reposReducer = (state: ReposType[] = initialState, action: ActionsReposType): ReposType[] => {
    switch (action.type) {
        case 'repos/SET-REPOS':
            return action.repos
        default:
            return [...state]
    }
};

// thunks
export const fetchReposTC = (username: string): ThunkType => async dispatch => {
    const res = await reposAPI.getRepos(username)
    dispatch(setReposAC(res.data))
}

// types
export type ActionsReposType = ReturnType<typeof setReposAC>

