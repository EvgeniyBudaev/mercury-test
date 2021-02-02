import React from 'react'
import styles from './header.module.scss'
import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.inner}>
                        <Logo />
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header