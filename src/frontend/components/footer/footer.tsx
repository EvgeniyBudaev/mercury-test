import React from 'react'
import styles from './footer.module.scss'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.copyright}>Copyright 2021</p>
        </div>
    )
}

export default Footer