export interface UserType {
    email: string, password: string, userName: string, birth: number, gender: string
}

export interface UserJoinType{
    type: string;
    payload: {
        email: string, password: string, userName: string, birth: number, gender: string
    }
}