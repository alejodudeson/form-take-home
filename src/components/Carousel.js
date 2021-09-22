import * as React from 'react'
import 'swiper/swiper-bundle.css'
import Swiper from 'react-id-swiper'

import Image from '../components/Image'
import '../sass/carousel.scss'

import {Component} from "react"
const sliderParams = {
    slidesPerView: 'auto',
    centeredSlides: false,
    breakpoints: {
        768: {
            noSwiping: true
        }
    }
}

class Carousel extends Component {
    render (){
        return (

            <div className="carousel-container">
                <Swiper {...sliderParams}>
                    <div className="item sm">
                        <Image src="carousel_01.png" alt="Kitchen Solution"/>
                    </div>
                    <div className="item lg">
                        <Image src="carousel_02.png" alt="Kitchen Storage"/>
                    </div>
                </Swiper>
            </div>
        )
    }
}

export default Carousel
