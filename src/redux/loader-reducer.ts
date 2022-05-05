import {AppActionType} from "./store";

const initialState: InitialStateType = {
    status: 'idle',
}

export const loaderReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export type InitialStateType = {
    status: RequestStatusType
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded'

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'SET-STATUS', status} as const)

export type ActionsLoaderType = ReturnType<typeof setAppStatusAC>

