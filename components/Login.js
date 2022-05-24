

export function Login(){
  
    return(
      <div className="all">
      <form>
          <input type="text" placeholder="UserID" name="userid" required/><br/>
          <input type="password" placeholder="Password" name="password" required/><br/>
          <button type="submit">Login</button>
        <a href='/'>회원가입</a> |  <a href="/">비밀번호 찾기</a>
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