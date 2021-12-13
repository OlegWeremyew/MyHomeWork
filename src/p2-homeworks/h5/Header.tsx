
import React from 'react'
import {NavLink, useMatch} from "react-router-dom"
import s from './Header.module.css'

function Header() {
    let match = useMatch('/pre_junior')

    return (
        <div className={s.headerComp}>
            <div className={s.container}>
                <div className={s.navLinks}>
                    <span className={s.span}><NavLink to={'/'} className={(navLink) => (match ? s.active : s.navLink)}>PreJunior</NavLink></span>
                    <span className={s.span}><NavLink to={'/junior'} className={(navLink) => (navLink.isActive ? s.active : s.navLink)}>Junior</NavLink></span>
                    <span className={s.span}><NavLink to={'/junior_pluse'} className={(navLink) => (navLink.isActive ? s.active : s.navLink)}>JuniorPluse</NavLink></span>
                </div>
            </div>
        </div>
    )
}

export default Header