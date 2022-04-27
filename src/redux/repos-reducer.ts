import {Dispatch} from "redux";
import {reposAPI, ReposType} from "../api/repos-api";

const initialState: Array<ReposType> = []

export const setReposAC = (repos: ReposType[]) => ({type: 'repos/SET-REPOS', repos} as const);

export const reposReducer = (state: Array<ReposType> = initialState, action: ActionsType): Array<ReposType> => {
    switch (action.type) {
        case 'repos/SET-REPOS':
            return action.repos.map(el => ({...el}))
            // return action.repos
        default:
            return {...state}
    }
};

// thunks
export const fetchReposTC = (username: string) => {
    return (dispatch: ThunkDispatch) => {
        reposAPI.getRepos(username)
            .then((res) => {
                dispatch(setReposAC(res.data))
            })
    }
}

type ActionsType = ReturnType<typeof setReposAC>
type ThunkDispatch = Dispatch<ActionsType>