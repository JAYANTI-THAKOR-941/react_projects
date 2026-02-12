import React from 'react'

const About = () => {

  // const greetUser = ()=>{
  //   alert('Hello User.!!');
  // }

  const greetUser = (name)=>{
    alert(`Hello ${name}`);
  }



  return (
    <>
      <div className="about-hero">
        <h1>Build Smarter. Scale Faster. Succeed Digitally.</h1>
        <p>TechStartUp helps businesses and innovators turn ideas into high-performance digital products using modern, scalable, and future-ready technology.</p>
        <p>From web applications to custom software solutions, we design and develop technology that drives growth, efficiency, and real-world impact.</p>
        <button onDoubleClick={()=>greetUser("Jayanti")}>Get in Touch</button>
      </div>
    </>
  )
}

export default About