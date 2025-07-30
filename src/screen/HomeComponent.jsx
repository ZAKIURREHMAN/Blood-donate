import React from 'react'
import Hero from './Hero'
import BloodCart from './BloodCart'
import Testimonial from './Testimonial'
import FAQ from './FAQ'
import Footer from './Footer'
import DevelopedBy from './DevelopedBy'

function HomeComponent() {
  return (
    <div>
        < Hero />
        < BloodCart />
        < Testimonial />
        < FAQ />
        < Footer />
        <DevelopedBy/>
    </div>
  )
}

export default HomeComponent