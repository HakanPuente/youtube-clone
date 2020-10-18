import React from 'react';
import "./Header.css";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                
                <img
                className="header__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                alt="" 
                />
            </div>
           
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton" />
   
            </div>
                     
            <div className="header__icons">
                <VideoCallIcon />
                
                <AppsIcon />
                
                <NotificationsIcon />
                
                <Avatar 
                alt="Hkn Kky"
                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1018-CUSA00133_00-AV00000000000017/1593195859000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
                />
            </div>
        </div>
    )
}

export default Header