import React from 'react'
import './homecomp.css'

export default function Homepagecomp() {
  return (
    <div className='home'>
        {/* <iframe width="1550" height="800" src="https://www.youtube.com/embed/X1ECSmXUtAQ?si=TF8fg7FGuoHxWMNr"
         frameborder="0" 
         allowfullscreen
         ></iframe> */}

         <img alt='img'
         src='https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className='home-des'>
          <h1>Movie Name</h1>
          <p>This is movie description This is movie description. This is movie description</p>
          <div className='buttons-div'>
          <button className='playbtn'>
            <span><i class="fa-solid fa-play"/></span>
             <span>Play</span>
              </button>

            <button className='morebtn'>
            <span><i class="fa-solid fa-circle-info"></i></span>
              <span>More info</span>
              
              </button>

              <div className='vol'>
              <i class="fa-solid fa-volume-high"></i>
              </div>
            
            
          </div>
        </div>
      
    </div>
  )
}
