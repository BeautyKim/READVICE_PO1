import React from 'react';

export function ModifyReadingBooks() {
    const [value, setValue] = React.useState();
    const itemData = [
        {
            title: ' 작별인사',
            author: '김영하',
            genre: '장편소설',
            publisher: '복복서가'
        }, {
            src: 'http://image.kyobobook.co.kr/images/book/large/188/l9791161571188.jpg',
            title: '불편한 편의점',
            author: '김호연',
            genre: '장편소설',
            publisher: '나무옆의자'
        }, {
            src: 'http://image.kyobobook.co.kr/images/book/large/685/l9791191347685.jpg',
            title: '마음의 법칙',
            author: '폴커 키츠',
            genre: '인문/심리학',
            publisher: '포레스트북스'
        }, {
            src: 'http://image.kyobobook.co.kr/images/book/large/805/l9788933871805.jpg',
            title: '무엇이 옳은가',
            author: '후안 엔리케스',
            genre: '인문/인문학일반',
            publisher: '세계사'
        }
    ];
    return (
        <div className='center'>
            <form >
                <h1>내 서재 관리</h1>
                <div>
                    <img
                        src='http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg'></img>
                    <img
                        src='http://image.kyobobook.co.kr/images/book/large/188/l9791161571188.jpg'></img>
                    <img
                        src='http://image.kyobobook.co.kr/images/book/large/685/l9791191347685.jpg'></img>
                    <img
                        src='http://image.kyobobook.co.kr/images/book/large/805/l9788933871805.jpg'></img>

                </div>
                <label className='right' htmlFor="icon-button-file">
                    <input accept="image/*" id="icon-button-file" type="file"/>
                </label>
            </form>
        </div>
    );
}
