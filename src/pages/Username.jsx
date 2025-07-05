import React from 'react'
import Comma from '../components/Comma'
import Gallery from '../components/Gallery'
import TellUs from '../components/TellUs'
import UsernameHero from '../components/UsernameHero'


const Username = () => {
  return (
    <>
      <UsernameHero/>
      <Comma />
      <Gallery />
      <TellUs />
    </>
  )
}

export default Username