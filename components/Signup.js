import { FcGoogle } from "react-icons/fc"

export function Signup(){
  
    return(
      <div className="all">
      <form>
      <button type="submit"><FcGoogle size={15}/> Google 계정으로 가입</button><br/>
      또는<br/>
      <button type="submit">ID/PW 회원가입</button><br/>
      <button type="submit">로그인</button><br/>
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