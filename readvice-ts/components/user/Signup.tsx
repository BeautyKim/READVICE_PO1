import {Header} from "@/components";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"

export default function Signup(){
  
    return(
      <div className="all">
      <Header title="구글회원가입" />
      <form>
      <button type="submit"><FcGoogle size={15}/> Google 계정으로 가입</button><br/>
      또는<br/>
      <Link href="/user/join"><button type="submit">ID/PW 회원가입</button></Link><br/>
      <Link href="/user/login"><button type="submit" >로그인</button></Link><br/>
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