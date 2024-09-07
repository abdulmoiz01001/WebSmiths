
<<<<<<< HEAD
import About from '@/components/LandingPage/About'
import Blogs from '@/components/LandingPage/Blogs'
import Doctors from '@/components/LandingPage/Doctors'
import Footer from '@/components/LandingPage/Footer'
import HeroSection from '@/components/LandingPage/Home'
import Navbar from '@/components/LandingPage/Navbar'
import Services from '@/components/LandingPage/Services'
import { Home } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

=======
import React from 'react'
import { Outlet } from 'react-router-dom'
>>>>>>> 11058b85233d04cdc227bb975a5298b45c706150

const HomeLayout = () => {
  return (
    <div>
      <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="home">
          <HeroSection />
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
