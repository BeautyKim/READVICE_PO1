export interface UserType {
    userId: string, password: string, userName: string, email: string, birth: number, gender: string
}
export interface UserState{
    data: UserType[]
    status: 'idle' | 'loading' | 'failed'
}
export interface UserJoinType{
    type: string;
    payload: {
        userId: string, password: string, userName: string, email: string, birth: number, gender: string
    }
}
export interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}