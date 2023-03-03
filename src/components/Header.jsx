import React, { useRef } from 'react'

const Header = () => {

    let nav=useRef(null);
    let handleNav=()=>{
            nav.current.style.display="block"
    }
  return (
    <header>
        <h1>Portfolio</h1>
        <span onClick={handleNav}>menu</span>
        <nav ref={nav}>
            <ul>
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