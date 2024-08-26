import React from 'react'
import './pagecomp.css'

export default function PageComp(props) {
  return (
    <div className='pagescreen'>
        <h1>{props.title}</h1>
      <div className='movies-container'>
      <iframe width="350" height="200" src={props.link1}
         frameborder="20" 
          allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link2}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link3}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link4}
         frameborder="20" 
         allowfullscreen
         ></iframe>
      </div>
      

      <div className='movies-container'>
      <iframe width="350" height="200" src={props.link1}
         frameborder="20" 
          allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link2}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link3}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link4}
         frameborder="20" 
         allowfullscreen
         ></iframe>
      </div>

       <div className='movies-container'>
      <iframe width="350" height="200" src={props.link1}
         frameborder="20" 
          allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link2}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link3}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link4}
         frameborder="20" 
         allowfullscreen
         ></iframe>
      </div>

      <div className='movies-container'>
      <iframe width="350" height="200" src={props.link1}
         frameborder="20" 
          allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link2}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link3}
         frameborder="20" 
         allowfullscreen
         ></iframe>

        <iframe width="350" height="200" src={props.link4}
         frameborder="20" 
         allowfullscreen
         ></iframe>
      </div>
    </div>
  )
}
