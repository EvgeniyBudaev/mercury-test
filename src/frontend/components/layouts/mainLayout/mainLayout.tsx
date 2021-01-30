import React from 'react'
import styles from './mainLayout.module.scss'
import Footer from "../../footer/footer";

const MainLayout: React.FC = (props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    {props.children}
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLayout
