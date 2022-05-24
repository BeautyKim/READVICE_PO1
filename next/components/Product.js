import Image from "next/image";
import bookSearch from "../public/bookSearch.png"
export default function Product(){
    return(
        <div>
            <section>
                <h1 className="mainProduct">하나의 검색창으로<br/>새로운 독서 패러다임을 경험하세요.</h1>
                <h3 className="subProduct">나의 서재를 찍어서<br/>내 취향에 맞는 도서를 추천 받자</h3>
                <Image id="bookSearch" src={bookSearch} width={200} height={300} alt="검색소개"/>
            </section>
            <style jsx>{`
                section {
                    margin: 10% 15%;
                    background-image:url(/blob.svg);
                    background-size: 500px;
                    background-repeat: no-repeat;
                    background-position: 70% 30%;
                }
                .mainProduct {
                    text-align: center;
                }
                .subProduct {
                    text-align: left;
                }
                #bookSearch{
                    
                }
                
            `}</style>
        </div>
    )
}