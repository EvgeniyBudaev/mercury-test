import React from 'react'
import styles from './card.module.scss'
import {ICard} from "./interface";

const Card: React.FC<ICard> = ({post}) => {
    const {title, body} = post

    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.text}>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card