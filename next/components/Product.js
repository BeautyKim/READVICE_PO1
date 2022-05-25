import Image from "next/image";
import bookSearch from "../public/bookSearch.png"
export default function Product(){
    return(
        <div className="main">
            <section >
                <h1 className="mainProduct">하나의 검색창으로<br/>새로운 독서 패러다임을 경험하세요.</h1>
                <h3 className="subProduct">나의 서재를 찍어서<br/>내 취향에 맞는 도서를 추천 받자</h3>
                <Image className="bookSearch" src={bookSearch} width={200} height={300} alt="검색소개"/><br/>
                <button className="center">회원가입</button>
            </section>
            <div>
            </div>
            <style jsx>{`
                section {
                    padding-top: 100px;
                }

                .mainProduct {
                    text-align: center;
                }
                .subProduct {
                    padding-top: 100px;
                    padding-left: 3%;
                    text-align: left;
                }
                .bookSearch {
                    padding-top: 100px;
                    padding-left: 10%;
                    text-align: left;
                }
                .center {
                    text-align: center;
                }
            `}</style>
        </div>
    )
}