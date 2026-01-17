import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import RentAgreementPage from './pages/RentAgreementPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rent-agreement" element={<RentAgreementPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App