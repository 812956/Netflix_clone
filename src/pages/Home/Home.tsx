import React from 'react'
import './home.css'
import Navbar from '../../componants/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../componants/TitleCards/TitleCards'
import Footer from '../../componants/Footer/Footer'

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <div className='hero'>
           <img src={hero_banner} alt="" className='banner-img' />
           <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img'/>
            <p>The first ever Turkish Netflix Original Series!!! What an arrival on the global digital platform for Turkey!.</p>
            <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
           </div>
        </div>
        <div className="more-cards">
        <TitleCards title='Blockbuster Moview' category={'top_rated'}/>
        <TitleCards title='Only on Netflix' category={'popular'}/>
        <TitleCards title='Upcoming' category={'upcoming'}/>
        <TitleCards title='Top Piks For you' category={'now_playing'}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
