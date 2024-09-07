
import About from '@/components/LandingPage/About'
import Blogs from '@/components/LandingPage/Blogs'
import Doctors from '@/components/LandingPage/Doctors'
import Footer from '@/components/LandingPage/Footer'
import Navbar from '@/components/LandingPage/Navbar'
import Services from '@/components/LandingPage/Services'
import { Home } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'


const HomeLayout = () => {
  return (
    <div>
      <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

       
      </main>

      <Footer />
    </div>
     <Outlet/>
    
    </div>
  )
}

export default HomeLayout
