import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import InstagramSection from './components/InstagramSection'
import BlogSection from './components/BlogSection'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductSection/>
      <BlogSection/>
      <InstagramSection/>
      <Footer/>

    </div>
  )
}

export default page