import React from 'react'
import Cards from "../../cards/cards";
import Feedback from "../../feedback/feedback";
import SliderHome from "../../sliderHome";

const HomePage: React.FC = () => {
    return (
        <>
            <SliderHome />
            <Cards />
            <Feedback />
        </>
    )
}

export default HomePage
