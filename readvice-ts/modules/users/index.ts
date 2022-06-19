import { UserState } from '@/types/users/join';
import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AppState } from '../store'


const initialState: UserState = {
    data: [],
    status: 'idle'
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state: UserState, _payload){
            state.status = 'loading';
            
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state: UserState, _payload){
            state.status = 'loading';
            
        },
        loginSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure,
    loginRequest, loginSuccess, loginFailure} = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer