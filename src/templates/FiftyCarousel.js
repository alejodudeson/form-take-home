import * as React from 'react'
import Carousel from '../components/Carousel'
import '../sass/fifty-image.scss';

const FiftyCarousel = () => {
    return (
        <div className="animate">
            <div className="fifty-container">
                <div className="left">
                    <div className="sm-text">Lorem-Ipsum</div>
                    <div className="lg-text">Lorem ipsum dolor sit amet, conseqitur</div>
                    <div className="md-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>

                </div>
                <div className="right">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}

export default FiftyCarousel
