import React from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import IconButton from '@mui/material/IconButton';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';

export function ModifySelectionList() {
    const [value, setValue] = React.useState();

    const itemData = [
        {
            src: 'http://image.kyobobook.co.kr/images/book/large/754/l9791191043754.jpg',
            title: '세상의 마지막 기차역',
            author: '무라세 다케시',
            genre: '장편소설',
            publisher: '모모',
          },
          {
            src: 'http://image.kyobobook.co.kr/images/book/large/620/l9791162245620.jpg',
            title: '구글 엔지니어는 이렇게 일한다',
            author: '타이터스 원터스',
            genre: '컴퓨터/IT',
            publisher: '한빛미디어',
          },
          {
            src: 'http://image.kyobobook.co.kr/images/book/large/067/l9791157688067.jpg',
            title: '그림을 닮은 와인 이야기',
            author: '정희태',
            genre: '요리/와인',
            publisher: '동양북스',
          },
          {
            src: 'http://image.kyobobook.co.kr/images/book/large/010/l9788963724010.jpg',
            title: '오늘의 에코 라이프',
            author: '테사 워들리',
            genre: '양철북',
            publisher: '정치/사회',
          },
    ];
    return (
        <div className='center'>
            <form>
                <h1>내 서재 관리</h1>
                <div className='center'>
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
                    <label className='right' htmlFor="icon-button-file">
                        <input accept="image/*" id="icon-button-file" type="file"/>
                    </label>
                </form>
            </div>
        );
            </form>
        </div>
    );
}
