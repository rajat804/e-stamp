import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import RentAgreementPage from './pages/RentAgreementPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rent-agreement" element={<RentAgreementPage />} />
      </Routes>
    

    </div>
  )
}

export default App