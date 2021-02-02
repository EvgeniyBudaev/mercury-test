import React from 'react'
import styles from './sliderCard.module.scss'


const SliderCard = ({images, text, description}) => {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.contentImg}>
                        <img src={images} alt="images" />
                        <div className={styles.contentBox}>
                            <p>{text}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        </div>
    )
}

export default SliderCard