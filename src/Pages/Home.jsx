import React from 'react'
import Nav from '../Component/Common-Component/Nav'
import HomeSwiper from '../Component/HomePages/HomeSwiper'
import Footer from '../Component/Common-Component/Footer'
import SmallSwiper from '../Component/HomePages/SmallSwiper'
import Products from '../Component/HomePages/Products'
import Brands from '../Component/HomePages/Brands'
import Blogs from '../Component/HomePages/Blogs'
const Home = () => {

  return (
    <div>
      
      <HomeSwiper/>
      <SmallSwiper/>
      <Products/>
      <Brands/>
      <Blogs/>
      

    </div>
  )
}

export default Home
