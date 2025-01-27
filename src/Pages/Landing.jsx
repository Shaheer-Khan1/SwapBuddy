import React from 'react'
import Footer from '../components/LandingComponents/Footer'
import Header from '../components/LandingComponents/Header'
import HeroSection from '../components/LandingComponents/HeroSection'
import Owners from '../components/LandingComponents/Owners'
import Swap from '../components/LandingComponents/Swap'
import Selection from '../components/LandingComponents/Selection'
import Timetable from '../components/LandingComponents/Timetable'

export default function Landing() {
  return (
    <>
    <HeroSection/>
    <Swap/>
    <Selection/>
    <Timetable/>
    <Owners/>
    <Footer/>
  </>
  )
}
