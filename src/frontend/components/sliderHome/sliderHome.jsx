import React from 'react'
import styles from './sliderHome.scss'
import SimpleSlider from "./simpleSlider";

const SliderHome = () => {
    return (
        <div className="sliderHome">
            <div className="slider">
                <div className="sliderContainer">
                    <div className="sliderInner">
                        <SimpleSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderHome