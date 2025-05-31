import About from '@/components/About'
import Lander from '@/components/Lander'
import React from 'react'

export default function page() {
  return (
    <>
      <Lander />  
      <section id='about'>
        <About /> 
      </section>
    </>
  )
}
