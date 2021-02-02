import React from 'react'
import styles from './pageOne.module.scss'

const PageOne: React.FC = () => {
    return (
        <div className={styles.pageOne}>
            <div className={styles.container}>
                <h1>Это страница №1</h1>
            </div>
        </div>
    )
}

export default PageOne
