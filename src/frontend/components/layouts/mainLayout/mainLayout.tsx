import React from 'react'
import styles from './mainLayout.module.scss'
import Footer from "../../footer/footer";
import Header from "../../header";

const MainLayout: React.FC = (props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
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
