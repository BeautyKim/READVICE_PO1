export function Team() {

    return (
        <form>
            <div >
                <h1>Readvice</h1>
                <h5>
                    Big company announcement or simple sub-header taking two or more lines.</h5>
            </div>
            <div className="imgAll">
            <div className="img1">
                <img
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4>Ah-Reum Kim</h4>
                <h6>Nam ut justo placerat, eleifend sem at, finibus velit.</h6>
            </div>
            <div className="img2">
                <img
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4>Hong-ju Noh</h4>
                <h6>Nam ut justo placerat, eleifend sem at, finibus velit.</h6>
            </div>
            <div className="img3">
                <img
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4>Min-seo Choi</h4>
                <h6>Nam ut justo placerat, eleifend sem at, finibus velit.</h6>
            </div>
            <div className="img4">
                <img
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4>Jin-hee Ha</h4>
                <h6>Nam ut justo placerat, eleifend sem at, finibus velit.</h6>
            </div>
            </div>
            <style jsx>{`
                .imgAll {
                    float: right;
                    display: flex;
                }
            `}</style>
        </form>

    );
}