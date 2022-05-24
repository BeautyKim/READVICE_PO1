import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <nav>
                <Link href="#" target='_target'><a>팀소개</a></Link> |
                <Link href="#" target='_target'><a>문의하기</a></Link>
            </nav>
            <style jsx>{`
                footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #f1f1f1;
                text-align: center;
                }
            `}</style>
        </footer>
    )
}