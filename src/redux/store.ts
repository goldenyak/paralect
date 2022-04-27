import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reposReducer} from "./repos-reducer";
import {userReducer} from "./user-reducer";

const rootReducer = combineReducers({
    repos: reposReducer,
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
