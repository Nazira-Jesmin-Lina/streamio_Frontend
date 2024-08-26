import React from 'react'
import PageComp from '../components/PageComp'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TVShows() {
  return (
    <div>
        <Navbar/>
        
      <PageComp
        title="TV Shows"
        link1="https://www.youtube.com/embed/X1ECSmXUtAQ?si=TF8fg7FGuoHxWMNr"
        link2="https://www.youtube.com/embed/X1ECSmXUtAQ?si=TF8fg7FGuoHxWMNr"
        link3="https://www.youtube.com/embed/X1ECSmXUtAQ?si=TF8fg7FGuoHxWMNr"
        link4="https://www.youtube.com/embed/X1ECSmXUtAQ?si=TF8fg7FGuoHxWMNr"
      />

      <Footer/>
    </div>
  )
}
