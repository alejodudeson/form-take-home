import * as React from 'react'
import gsap from 'gsap'
import '../sass/header.scss'
import {Component} from "react"

class Header extends Component {
    componentDidMount(){
        gsap.to('.title', {
            autoAlpha: 1,
            duration: 2,
            x:0
        });
        gsap.to('.sub-title', {
            autoAlpha: 1,
            duration: 2,
        });
        gsap.to('.header-container', {
            autoAlpha: 1,
            duration: 2,
        });
    }
render(){
        return (
            <div>
                <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <div className="sub-title d-lg-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
                <div className="header-container colors">
                    <div className="left">
                        <div className="color brick"></div>
                        <div className="color grey"></div>
                        <div className="color dark"></div>
                        <div className="color black"></div>
                    </div>
                    <div className="right">
                        <div className="color grey"></div>
                        <div className="color dark"></div>
                        <div className="color black"></div>
                    </div>
                </div>
                <div className="header-container labels">
                    <div className="left">
                        <div className="">Lorem Ipsum</div>
                    </div>
                    <div className="right">
                        <div className="">Dolor sit</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header
