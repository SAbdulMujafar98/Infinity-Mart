import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/products/Products'
import Footer from '../components/Footer/Footer'
import ImageSlider from '../components/ImageSlider/ImageSlider'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <ImageSlider />
        <Products />
        <Footer />
    </div>
  )
}

export default Landing