import react from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-[1320px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
