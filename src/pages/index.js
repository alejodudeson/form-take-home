import * as React from 'react'
import {useEffect} from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from '../templates/Navbar'
import Header from '../templates/Header'
import FiftyImage from '../templates/FiftyImage'
import FiftyCarousel from '../templates/FiftyCarousel'
import BackgroundGuides from "../templates/BackgroundGuides";

import '../sass/index.scss'


gsap.registerPlugin(ScrollTrigger)

const themeAnimation = (el) => {
    gsap.fromTo(el,
        {y: '+=100',opacity: 0 },
        {y: 0,opacity: 1, duration: 1,
            scrollTrigger: {
             trigger: el,
             start: 'top bottom',
                end: '100px 80%',
             scrub: true
            }
        }
    )
}
const HomePage = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate');

        elements.forEach(el => {
            themeAnimation(el)
        })
    })

  return (
      <div>
        <title>FORM Take Home</title>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
            <BackgroundGuides></BackgroundGuides>
            <Header></Header>
            <FiftyImage></FiftyImage>
            <FiftyCarousel></FiftyCarousel>
        </main>
      </div>
  )
}

export default HomePage
