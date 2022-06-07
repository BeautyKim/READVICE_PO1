import Image from "next/image";
import bb8 from "../public/bb8.svg"

export default function Chatbot(){
    return(
        <div>
            <Image className="bot" src={bb8} width={100} height={100} alt="챗봇" />
            <style jsx>{`
                div {
                    padding-top: 750px;
                    float: right;
                    position: sticky;
                }
            `}</style>
        </div>
    )
}