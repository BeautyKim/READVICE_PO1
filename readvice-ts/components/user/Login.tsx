import {Header} from "@/components";
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"

export default function Login(){
  
    return(
      <div className="all">
      <Header title="로그인" />
      <form>
          <input type="text" placeholder="UserID" name="userid" required/><br/>
          <input type="password" placeholder="Password" name="password" required/><br/><br/>
          <button type="submit">Login</button><br/>
        <Link href='/user/join'><a>회원가입</a></Link> | <Link href="#"><a>비밀번호 찾기</a></Link><br/>
          <FcGoogle size={25}/>
      </form><br/><br/>
      <style jsx>{`
            form {
              margin:auto;
              padding-top: 100px;
              width : 300px;
              height: 200px;
            }
            .all{
              margin:auto;
              text-align:center;
            }
          `}</style>
      </div>
    )
}