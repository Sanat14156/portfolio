import React from 'react'
import img1 from './sanat.jpg'

const Home = () => {
  return (
    <div className='home'><a id='home'></a>
        <p>
            Hello, I am <span>Sanat Kumar</span>. 
            <br></br> 
            I am looking forward to work as a <span>Front End Developer</span>.
            <br></br>
            <br></br>
            <span>Skills:</span> HTML | CSS | JAVASCRIPT | REACT JS | BOOTSTRAP | JAVA | HIBERNATE | SPRINGBOOT | SQL.
            <br></br>
            <br></br>
            <a href='#contact'>HIRE ME</a>
        </p>
        <img src={img1} alt={img1}></img>
    </div>
    
  )
}

export default Home