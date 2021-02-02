import React, {useState} from 'react'
import styles from './sliderInfo.module.scss'
import Popup from "../../ui/popup";
import Login from "../../auth/login";
import {connect} from "react-redux";

const SliderInfo = () => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div className={styles.sliderInfo}>
            <h2>Header</h2>
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Учетная запись">
                <Login />
            </Popup>
            {
                openPopup ? null : <button onClick={() => setOpenPopup(true)}>Login</button>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(SliderInfo);