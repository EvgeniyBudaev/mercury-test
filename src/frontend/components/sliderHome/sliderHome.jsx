import React from 'react'
import './sliderHome.scss'
import SimpleSlider from "./simpleSlider";
import SliderInfo from "./sliderInfo";

const SliderHome = () => {
    return (
        <div className="sliderHome">
            <div className="slider">
                <div className="sliderContainer">
                    <div className="sliderWrapper">
                        <SliderInfo />
                        <div className="sliderInner">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderHome

