import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Herosection from './Herosection'
import TrendingProducts from '../shop page/TrendingProducts'
import DealsSection from './DealsSection'
import Blogss from "../blogs/Blogss"


const Home = () => {
  return (
   <>
   <Banner/>
   <Categories/>
   <Herosection/>
   <TrendingProducts/>
   <br/>
   <DealsSection/>
   <Blogss/>
   
   
   </>
  )
}

export default Home
