import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/header.css';

export default Header (props) => {
    return (
        <header className='main-header'>
            <div className='container'>
                <h1 className='main-header__brand'>Would You Rather</h1>
                {props.user ? 
                    <ul className='main-header__links'>
                        <li className='main-header__link'><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                        <li className='main-header__link'><NavLink activeClassName="active" to="/add">New Question</NavLink></li>
                        <li className='main-header__link'><NavLink activeClassName="active" to="/leaderboard">Leaderboard</NavLink></li>
                        <li className='main-header__link'>
                            <ul className="main-header__user-options">
                                <li className="main-header__user-option">{props.user.name}</li>
                                <li className="main-header__user-option" onClick={props.logOut}><Link to="/">Sign Out</Link></li>
                            </ul>
                        </li>
                    </ul>
                    : null
                }
            </div>
        </header>
    );
};
