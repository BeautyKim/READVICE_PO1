import Image from "next/image";
import Link from "next/link";
import css from "styled-jsx/css";

const style = css`
    header {
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        padding-top: 15px;
        
        }
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
    `;

export default function NavBar(){
    return(
        <div>
            <header>
                <Link href="/"><Image src="/readviceLogo.svg" alt="readviceLogo" width={100} height={100}/></Link>
                <nav>
                    <ul>
                        <li> <Link href="#"><a>로그인</a></Link></li>
                        <li> <Link href="#"><a>My Page</a></Link></li>
                    </ul>
                </nav>
            </header>
            <style jsx>{style}</style>
            
        </div>
    )
}