import React, {useState} from 'react'
import styles from './sliderInfo.module.scss'
import Popup from "../../ui/popup";

const SliderInfo = () => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div className={styles.sliderInfo}>
            <h2>Header</h2>
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Авторизация">
                <p>Вы успешно отправили сообщение!</p>
            </Popup>
            <button onClick={() => setOpenPopup(true)}>Login</button>
        </div>
    )
}

export default SliderInfo