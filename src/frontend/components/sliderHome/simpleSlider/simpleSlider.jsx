import React, {Component} from 'react'
import Slider from 'react-slick'
import './simpleSlider.scss'

import images1 from '../../../assets/images/pictures1.jpg'
import images3 from '../../../assets/images/pictures3.jpg'

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
                    <SliderCard images={images1} text="text description text" description="description text description" />
                    <SliderCard images={images3} text="text description text" description="description text description" />
                    <SliderCard images={images1} text="text description text" description="description text description" />
                    <SliderCard images={images3} text="text description text" description="description text description" />
                </Slider>
            </>
        )
    }
}

export default SimpleSlider