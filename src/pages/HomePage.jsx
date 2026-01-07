import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PartnersSlider from '../components/PartnersSlider'
import HowItWorksAndBestsellers from '../components/HowItWorksAndBestsellers'
import Testimonials from '../components/Testimonials'
import TrustEcosystem from '../components/TrustEcosystem'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection    />
        <PartnersSlider />
        <HowItWorksAndBestsellers />
        <Testimonials/>
        <TrustEcosystem />
        <Footer />
    </div>
  )
}

export default HomePage