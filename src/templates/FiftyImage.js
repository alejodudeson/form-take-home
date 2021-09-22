import * as React from 'react'
import Image from '../components/Image'
import '../sass/fifty-image.scss';

const FiftyImage = () => {
    return (
        <div className="animate">
            <div className="fifty-container bottom-border">
                <div className="left">
                    <div className="sm-text">Lorem-Ipsum</div>
                    <div className="lg-text">Lorem ipsum dolor sit amet</div>
                    <div className="md-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>

                </div>
                <div className="right">
                    <Image src="kitchen-design.png" alt="Kitchen Design"/>
                    <div className="md-text d-sm-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiftyImage
