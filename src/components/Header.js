import React, { Component } from 'react';
import './Header.scss';
import logo from 'images/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul className="header__tabs">
                    <li>Top absences</li>
                    <li>Top notes</li>
                    <li>Emplois du temps</li>
                </ul>
                <a className="header__signin">
                    <img src={logo}/>
                    Se connecter
                </a>
            </div>
        );
    }
}

export default Header;