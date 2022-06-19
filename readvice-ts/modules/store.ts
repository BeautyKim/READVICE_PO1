import { AnyAction, CombinedState, configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE  } from 'next-redux-wrapper'
import logger from 'redux-logger';
import { articleReducer } from '@/modules';
import { IBookState } from './books';
import { IArticleState } from './comments';

const isDev = process.env.NODE_ENV ==='development'


interface RootStates {
	article: IArticleState;
	book: IBookState;
	

}

const rootReducer = (
	state: RootStates,
    action: AnyAction
) => {
    if(action.type ===HYDRATE){
        return {
            ...state, ...action.payload
        }
    }
    return combineReducers({
		article: articleReducer
    })(state, action);
 
}


const makeStore = () =>
    configureStore({
        reducer:{rootReducer},
        middleware: getDefaultMiddleware =>
            isDev? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
            devTools: isDev
    });

export const wrapper = createWrapper(makeStore, {debug: isDev})

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;