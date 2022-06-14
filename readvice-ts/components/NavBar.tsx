import { BsPersonCircle } from "react-icons/bs"
import Image from "next/image";
import Link from "next/link";
import css from "styled-jsx/css";

const style = css`
    ul {
        list-style-type: none;
        padding: 0;
        }
    li {
        display: inline-block;
        margin-left: 10px;
        font-size: 12px;
        font-weight: bold;
        
        }
        .dropdown{
            position : relative;
            display : inline-block;
          }
        .dropbtn{
        background-color: #f5f5f5;
        color : rgb(37, 37, 37);
        text-align: center;
        cursor : pointer;
        font-size : 15px;
        }
    .dropdown-content{
        display : none;
        position : absolute;
        z-index : 1; /*다른 요소들보다 앞에 배치*/
        font-weight: 300;
        background-color: #f9f9f9;
        min-width : 80px;
        }
        
        .dropdown-content a{
        display : block;
        text-decoration : none;
        color : rgb(37, 37, 37);
        font-size: 12px;
        padding : 15px 10px;
        }
        
        .dropdown-content a:hover{
        background-color : #ececec
        }
        
        .dropdown:hover .dropdown-content {
        display: block;
        }
        li li {
            display: flex;
            align-items: center;
        }
    `;

export function NavBar(){
    return(
        <div>
            <header>
                <Link href="/"><Image src="/images/readviceLogo.svg" alt="readviceLogo" width={100} height={100}/></Link>
                <nav>
                    <ul>
                        <li className="dropdown"> <Link href="#" className="dropbtn"><BsPersonCircle /></Link>
                            <ul className="dropdown-content">
                                <li><Link href="/user/login"><a>로그인</a></Link></li>
                                <li><Link href="#"><a>로그아웃</a></Link></li>
                                <li><Link href="/user/signup"><a>회원가입</a></Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"> <Link href="#" className="dropbtn"><a>My Page</a></Link>
                            <ul className="dropdown-content">
                                <li><Link href="/myPage/information"><a>회원정보</a></Link></li>
                                <li><Link href="/myPage/readingBooks"><a>읽은 책</a></Link></li>
                                <li><Link href="/myPage/selectionList"><a>찜한 책</a></Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <style jsx>{style}</style>
            
        </div>
    )
}