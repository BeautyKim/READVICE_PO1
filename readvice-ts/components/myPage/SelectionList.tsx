import Header from "../Header"

export default function SelectionList() {
    return (
      <div>
        <Header title="찜한 책" />
        <form>
            <h1>내 서재 관리</h1>
            <button>읽은 책 목록</button>
            <button>찜한 책 목록</button>
            <div>
                <img src='http://image.kyobobook.co.kr/images/book/large/754/l9791191043754.jpg' />
                <img src='http://image.kyobobook.co.kr/images/book/large/620/l9791162245620.jpg' />
                <img src='http://image.kyobobook.co.kr/images/book/large/067/l9791157688067.jpg' />
                <img src='http://image.kyobobook.co.kr/images/book/large/010/l9788963724010.jpg' />
                <label htmlFor="icon-button-file">
                    <input accept="image/*" id="icon-button-file" type="file"/>
                    </label>
            </div>
        </form>
        </div>
    );

}