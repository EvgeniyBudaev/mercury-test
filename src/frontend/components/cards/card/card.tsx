import React from 'react'
import styles from './card.module.scss'
import {ICard} from "./interface";

const Card: React.FC<ICard> = (props) => {
    const {post} = props

    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <h4 className={styles.title}>Text1</h4>
                    <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
        </div>
    )
}

export default Card