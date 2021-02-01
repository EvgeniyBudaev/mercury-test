import React, {Component} from 'react'
import Slider from 'react-slick'
import './simpleSlider.scss'

import images from '../../../assets/images/pictures1.jpg'
import SliderCard from "./sliderCard";

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <>
                <Slider {...settings}>
                    <SliderCard images={images} />
                    <SliderCard images={images} />
                </Slider>
            </>
        )
    }
}

export default SimpleSlider