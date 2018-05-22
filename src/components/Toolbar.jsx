import React from 'react';
import { NavLink } from 'react-router-dom';

function Toolbar({ user }) {
    return (
        <header className="toolbar">
            <NavLink exact to="/"  activeClassName="active">Главная</NavLink>
            <NavLink to="/news" activeClassName="active">Новости</NavLink>
            <NavLink to="/profile" activeClassName="active">Профайл</NavLink>
            {user ?
                <NavLink to="/logout" activeClassName="active">Выйти</NavLink>
                :
                <NavLink to="/login" activeClassName="active">Вход</NavLink>
            }
            
        </header>
    )
}

export default Toolbar;