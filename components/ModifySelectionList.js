import React from 'react';


export function ModifySelectionList() {
    const [value, setValue] = React.useState();
    return (
        <div >
            <form>
                <h1>내 서재 관리</h1>
                <div>
                <form >
                    <div>
                        <img
                            src='http://image.kyobobook.co.kr/images/book/large/754/l9791191043754.jpg'></img>
                        <img
                            src='http://image.kyobobook.co.kr/images/book/large/620/l9791162245620.jpg'></img>
                        <img
                            src='http://image.kyobobook.co.kr/images/book/large/067/l9791157688067.jpg'></img>
                        <img
                            src='http://image.kyobobook.co.kr/images/book/large/010/l9788963724010.jpg'></img>
    
                    </div>
                    <label htmlFor="icon-button-file">
                        <input accept="image/*" id="icon-button-file" type="file"/>
                    </label>
                </form>
            </div>
        
            </form>
        </div>
    );
}
