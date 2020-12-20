import React from 'react'
import '../css/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img 
            className="header__logo"
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Tinder-512.png"
            alt="tinder"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>

        </div>
    )
}

export default Header
