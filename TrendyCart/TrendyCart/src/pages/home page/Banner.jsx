import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/header.png'
const Banner = () => {
  return (
    <>
    <div className='section__conteiner header__container'>
        <div className='header__content z-30'>
            <h4>UP TO 20% Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint tempora pariatur animi!
                 Reprehenderit, velit cum! Porro,itaque ex? Nihil nesciunt necessitatibus, 
                 culpa tempore molestias incidunt soluta assumenda possimus suscipit distinctio?
            </p>
            <button className='btn'><Link to='/shop' style={{color:"white"}}>EXPLORE NOW</Link></button>
        </div>
      <div className='header__image'>
        <img src={bannerImg} alt="banner image" />
      </div>
    </div></>
  )
}

export default Banner
