import React from 'react'
import './topten.css'

export default function Topten(props) {
  return (
    <div className='ten'>
      <h1>{props.title}</h1>
      <div className='container-sec'>
        <div className='topten-sec'>
        <h1>1</h1>
        <iframe width="400" height="200" src={props.link1}
            frameborder="20" 
            allowfullscreen
            ></iframe>
            
        </div>
         

    <div className='topten-sec'>
    <h1>2</h1>
      <iframe width="400" height="200" src={props.link2}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>3</h1>
      <iframe width="400" height="200" src={props.link3}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>4</h1>
      <iframe width="400" height="200" src={props.link4}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>5</h1>
      <iframe width="400" height="200" src={props.link5}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>6</h1>
      <iframe width="400" height="200" src={props.link6}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>7</h1>
      <iframe width="400" height="200" src={props.link7}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>8</h1>
      <iframe width="400" height="200" src={props.link8}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>9</h1>
      <iframe width="400" height="200" src={props.link9}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      <div className='topten-sec'>
      <h1>10</h1>
      <iframe width="400" height="200" src={props.link10}
         frameborder="20" 
         allowfullscreen
         ></iframe>
        
      </div>

      </div>
      
    </div>
  )
}
