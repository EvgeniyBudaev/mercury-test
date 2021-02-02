import React from 'react'
import {Link} from 'react-router-dom'
import styles from './logo.module.scss'
import {ROUTES} from "../../../routes";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                logo
            </Link>
        </div>
    )
}

export default Logo