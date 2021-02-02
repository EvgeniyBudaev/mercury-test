import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'
import {ROUTES} from "../../../routes";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.inner}>
                <NavLink to={ROUTES.PAGE_ONE}>Link1</NavLink>
                <NavLink to={ROUTES.PAGE_TWO}>Link2</NavLink>
                <NavLink to={ROUTES.PAGE_THREE}>Link3</NavLink>
                <NavLink to={ROUTES.PAGE_FOUR}>Link4</NavLink>
            </div>
        </div>
    )
}

export default Navbar