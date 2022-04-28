import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {ActionsReposType, reposReducer} from "./repos-reducer";
import {ActionsUserType, userReducer} from "./user-reducer";
import {ActionsLoaderType, loaderReducer} from "./loader-reducer";

const rootReducer = combineReducers({
    repos: reposReducer,
    user: userReducer,
    loading: loaderReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType = ActionsUserType | ActionsReposType | ActionsLoaderType
export type ThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionType>


// @ts-ignore
window.store = store;
