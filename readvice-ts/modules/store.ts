import {AnyAction, CombinedState, configureStore, combineReducers} from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import logger from 'redux-logger';


const isDev = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers({
})

const makeStore = () => configureStore({
    reducer: {
        rootReducer
    },
    middleware: getDefaultMiddleware => isDev
        ? getDefaultMiddleware().concat(logger)
        : getDefaultMiddleware(),
    devTools: isDev
});

export const wrapper = createWrapper(makeStore, {debug: isDev})

const store = makeStore();

export type AppState = ReturnType < typeof store.getState >;
export type AppDispatch = typeof store.dispatch;

export default store;