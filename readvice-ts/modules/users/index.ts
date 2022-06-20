import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface User {
    email: string, password: string, userName: string, birth: number, gender: string
}

export interface UserState{
    data: User[]
    status: 'idle' | 'loading' | 'failed'
}
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
            console.log(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer