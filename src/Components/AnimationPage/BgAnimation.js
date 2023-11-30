import React, {  useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './BgAnimation.css';

import Background from '../../Assets/bg.jpg'
import Moon from '../../Assets/moon.png'
import Cloud1 from '../../Assets/cloud1.png'
import Cloud2 from '../../Assets/cloud2.png'
import Santa from '../../Assets/santa.png'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BgAnimation = () => {
  const location = useLocation();
  const {wisher} = location.state || {};

  useLayoutEffect(() => {
    gsap.to('#moon', {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 2.2,
    })

    gsap.to('#bg', {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.1,
    })

    gsap.to('#santa', {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.5,
      y: -500,
      x: 2200,
    })

    gsap.to('#tree', {
      scrollTrigger: {
        scrub: 1,
      },
      x: -500,
    })

    gsap.to('#cloud1', {
      scrollTrigger: {
        scrub: 1,
      }, 
      x: -200
    })

    gsap.to('#cloud2', {
      scrollTrigger: {
        scrub: 1,
      }, 
      x: 300,
    })

    gsap.to('#text', {
      scrollTrigger: {
        scrub: 1,
      }, 
      y: -800,
    })

    gsap.to('#text2', {
      scrollTrigger: {
        scrub: 1,
      }, 
      y: -570,
    })
  }, []);


  return (
    <div className='bg'>
      <section>
        <img src={Background} alt="bg-red" id='bg' />
        <img src={Moon} alt="full-moon" id='moon' />
        <img src={Cloud1} alt="left-cloud" id='cloud1' />
        <img src={Cloud2} alt="right-cloud" id='cloud2' />
        <img src={Santa} alt="santa" id='santa' />
        <div id='tree'></div>
        <h2 id='text'>Wishes you a Merry christmas</h2>
        <h5 id='text2'>{wisher}</h5>
      </section>

      <section id="section10" class="demo">
        <a href="#thanks"><span></span></a>
        <p className='info'>Scroll Down</p>
      </section>
    </div>
  )
}

export default BgAnimation