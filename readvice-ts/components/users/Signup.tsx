import { userActions } from "@/modules/users"
import { UserType } from "@/types/users/join"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Signup: React.FC = () => {
    const [user, setUser] =useState<UserType>({
        userId:'', password:'', userName:'', email:'', birth:0, gender:''
    })
    const dispatch = useDispatch()
    const handleChange = (e: any) =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
  return (
    <>
        <form onSubmit={
            (e:any) => {
                e.preventDefault()
                dispatch(userActions.joinRequest(user))
                setUser({ userId:'', password:'', userName:'', email:'', birth:0, gender:'' })
            }
        }>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control rounded-3"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    onChange={handleChange}/>
                <label htmlFor="email">이메일</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="password"
                    className="form-control rounded-3"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}/>
                <label htmlFor="password">비밀번호</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="password"
                    className="form-control rounded-3"
                    id="password"
                    name="password"
                    placeholder="Password"/>
                <label htmlFor="password">비밀번호 재확인</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control rounded-3"
                    id="userName"
                    name="userName"
                    placeholder="사용자 이름"
                    onChange={handleChange}/>
                <label htmlFor="userName">사용자 이름</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="date"
                    className="form-control rounded-3"
                    id="birth"
                    name="birth"
                    placeholder="생일"
                    onChange={handleChange}/>
                <label htmlFor="birth">생년월일</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="male" id="gender" value="option1" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="gender">남성</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="female" id="gender" value="option2" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="gender">여성</label>
            </div>
            <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="aggrement" required />
            <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">회원가입</button>
            <hr className="my-4"/>
            <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
            <button
                className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                type="submit">
                <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"/></svg>
                Sign up with Twitter
            </button>
            <button
                className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                type="submit">
                <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook"/></svg>
                Sign up with Google
            </button>
        </form>
    </>
  );
}
export default Signup
