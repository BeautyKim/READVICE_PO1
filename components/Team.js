export function Team() {

    return (
        <form>
            <div >
                <h1>Readvice</h1>
                <h5>
                    Big company announcement or simple sub-header taking two or more lines.</h5>
            </div>
            <div className="imgAll">
            <div className="img1" align = "center">
                <img hspace ="20"
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4>Ah-Reum Kim</h4>
                <h6>사장입니다.<br/> 
                성실합니다.
                </h6>
            </div>
            <div className="img2" align = "center">
                <img
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4 >Hong-ju Noh</h4>
                <h6>셋째입니다.<br/>
                매의 눈을 담당하고 있습니다.</h6>
            </div>
            <div className="img3" align = "center">
                <img hspace ="20"
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4>Min-seo Choi</h4>
                <h6>막내입니다. <br/>
                요정을 담당하고 있습니다.</h6>
            </div>
            <div className="img4" align = "center">
                <img 
                    width='200px'
                    height='200px'
                    src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                <h4 >Jin-hee Ha</h4>
                <h6>둘째입니다.</h6>
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