import React, { useRef } from 'react'

const Header = () => {

    let nav=useRef(null);
    let close=useRef(null);
    let handleNav=()=>{
            nav.current.style.display="block"
    }
    let handleClose=()=>{
      nav.current.style.display="none"
    }
    
  return (
    <header>
        <h1>Portfolio</h1>
        <span onClick={handleNav}>menu</span>
        <nav ref={nav}>
            <ul><li ref={close} onClick={handleClose}>X</li>
                <li><a href='#home'>HOME</a></li>
                <li><a href='#projects'>PROJECTS</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#contact'>CONTACT</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header