import "./Header.scss";
import React from 'react';
import NPR from "../../assets/National_Public_Radio_logo.svg"

export default function Header() {
    return (
        <header className='header'>
            <img className="header__logo" src={NPR} alt="National Public Radio Logo" />
            <h1 className="header__title">Playgrounds For Everyone</h1>
        </header>
    );
}

