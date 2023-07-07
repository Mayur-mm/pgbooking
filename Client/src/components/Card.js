import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
import myImage from './img/mayur.jpg'
const Card = () => {
  return (
    <div className='card'>
    <div className='card-container'>
   
    <div className='image-container'>
            <img src={myImage} alt="hii"></img>
        </div>
        <div className='card-content'>

        <div className='card-title'>
           <h3> mayur chitaliya</h3>
        </div>
        <div className='class-body'>
        Full Stack Developer
        </div>
        </div>
        

   
    </div>
    
    </div>
  )
}

export default Card