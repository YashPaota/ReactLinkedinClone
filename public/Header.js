import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76DZru7QuUV8kXkWPFFDjujF524htHtuDKw&usqp=CAU" alt="linkedin-logo" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" />
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOptions Icon={HomeIcon} title="Home" />
                    <HeaderOptions Icon={PeopleIcon} title="My Network" />
                    <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                    <HeaderOptions Icon={MessageIcon} title="Messaging" />
                    <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                    <HeaderOptions avatar="DSC_0602-modified.png" title="Me" />
                </div>
            </div>
        </>
    )
}

export default Header