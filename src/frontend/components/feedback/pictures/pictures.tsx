import React from 'react'
import cn from 'classnames'
import styles from './pictures.module.scss'
import pictures1 from '../../../assets/images/pictures1.jpg'
import pictures2 from '../../../assets/images/pictures2.jpg'
import pictures3 from '../../../assets/images/pictures3.jpg'

const Pictures: React.FC = () => {
    const rightPicture = cn(styles.vertically, styles.right)

    return (
        <div className={styles.pictures}>
            <div className={styles.inner}>
                <img className={styles.vertically} src={pictures2} alt=""/>
                <img className={rightPicture} src={pictures3} alt=""/>
                <img className={styles.horizontally} src={pictures1} alt=""/>
            </div>
        </div>
    )
}

export default Pictures

