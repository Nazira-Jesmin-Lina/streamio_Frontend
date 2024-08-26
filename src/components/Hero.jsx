import React from 'react'
import './heroStyle.css'

export default function Hero(props) {
  return (
    <div className='hero'>
      <h1>{props.title}</h1>
      <div className='image-sec'>
      <iframe width="400" height="200" src={props.link1}
         frameborder="20" 
          allowfullscreen
         ></iframe>

        <iframe width="400" height="200" src={props.link2}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="400" height="200" src={props.link3}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="400" height="200" src={props.link4}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="400" height="200" src={props.link5}
         frameborder="20" 
         allowfullscreen
         ></iframe>
         <iframe width="400" height="200" src={props.link6}
         frameborder="20" 
         allowfullscreen
         ></iframe>
         <iframe width="400" height="200" src={props.link7}
         frameborder="20" 
         allowfullscreen
         ></iframe>
      </div>
    </div>
  )
}
