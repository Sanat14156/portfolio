import React from 'react'
import img1 from './sanat.jpg'

const Home = () => {
  return (
    <div className='home' id='home'>
        <p>
            Hello, I am <span>Sanat Kumar</span>. 
            <br></br> 
            I am looking forward to work as a <span>Front End Developer</span>.
            <br></br>
            <br></br>
            <span>Skills:</span> HTML | CSS | JAVASCRIPT | REACT JS | BOOTSTRAP | JAVA | HIBERNATE | SPRINGBOOT | SQL.
            <br></br>
            <br></br>
            <a href='https://drive.google.com/file/d/1z_Q1lGR0v2TYzbq5iWDyLaw10DlzGnbD/view?usp=share_link'>Get My Resume</a>
        </p>
        <img src={img1} alt={img1}></img>
    </div>
    
  )
}

export default Home