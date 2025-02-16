import React from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/HomeHero'
import Body from './Component/HomeBody'

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Body></Body>
            
        </div>
    )
}

export default Home