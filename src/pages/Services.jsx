import React from 'react'
import techServices from '../data/services.js'
import Card from '../components/Card.jsx'
const Services = () => {
  return (
    <>
       <Card services={techServices}/>
    </>
  )
}

export default Services