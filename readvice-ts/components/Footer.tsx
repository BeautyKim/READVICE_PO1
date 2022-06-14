import Link from "next/link";

export function Footer(){
    return(
        <footer>
            <nav>
                <Link href="/about/team" target='_target'><a>팀소개</a></Link>
                <Link href="/about/inquiry" target='_target'><a>문의하기</a></Link>
            </nav>
        </footer>
    )
}