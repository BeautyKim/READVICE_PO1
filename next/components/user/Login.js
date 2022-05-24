import Link from "next/link"
import { FcGoogle } from "react-icons/fc"

export default function Login(){
  
    return(
      <div className="all">
      <form>
          <input type="text" placeholder="UserID" name="userid" required/><br/>
          <input type="password" placeholder="Password" name="password" required/><br/>
          <button type="submit">Login</button>
        <Link href='#'><a>회원가입</a></Link> | <Link href="#"><a>비밀번호 찾기</a></Link><br/>
          <FcGoogle size={25}/>
      </form><br/><br/>
      <style jsx>{`
            .all{
              margin:auto;
              text-align:center;
            }
          `}</style>
      </div>
    )
}