// import React, {useState} from 'react'
import { SliderPics } from './SliderPics'
import { useState } from 'react'
import "../css/Sliders.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

export default function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0)
const length = slides.length
console.log(slides.length)

const nextSlide = ()=>{
    setCurrent(current === length - 1 ? 0 : current + 1)
}
const previousSlide = ()=>{
    setCurrent(current === 0 ? length - 1 : current -1)
}




    return (
        <div className="slider">
             <FaArrowAltCircleLeft className="leftArrow" onClick={previousSlide}/>
            <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide}/>
            
           {SliderPics.map((slide,index)=> {
               return(
                   
                   <div className={index === current ? "slide-active": "slide"} key={index}>
                       {index === current && (<img src={slide.image} className="images" alt="New Arrivals"  />)}
                       

                   </div>
                   
                   
               )
           })}
           
        </div>
    )
}
