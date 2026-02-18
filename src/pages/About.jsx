import React from 'react'
import './about.css';

const About = () => {

  const greetUser = (name)=>{
    alert(`Hello ${name}`);
  }



  return (
    <>
      <div className="about-hero" style={{textAlign:"center",padding:"50px"}} >
        <h1>Build Smarter. Scale Faster. Succeed Digitally.</h1>
        <p style={{margin:"14px 0"}}>TechStartUp helps businesses and innovators turn ideas into high-performance digital products using modern, scalable, and future-ready technology.</p>
        <p>From web applications to custom software solutions, we design and develop technology that drives growth, efficiency, and real-world impact.</p>
        <button style={{marginTop:"14px",padding:"12px 26px",backgroundColor:"red",color:"white",border:"0",borderRadius:"8px"}} onDoubleClick={()=>greetUser("Jayanti")}>Get in Touch</button>
      </div>

      <div className="about-container">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit minima soluta tenetur nostrum possimus a quidem, repellendus voluptate harum ducimus fugit facere, corrupti veritatis reiciendis magni ratione, modi unde!
        Ipsum consequatur laudantium sit, aspernatur necessitatibus ratione. Doloribus accusantium tenetur repellat dolorem consequuntur corporis quibusdam adipisci reiciendis, fuga reprehenderit maiores minus voluptates facilis rem laborum eaque a! Ex, ullam corporis.
        Quas, possimus! Autem rerum tempora ab animi minus nesciunt iure veritatis expedita odit enim eos architecto nobis velit deleniti illo laudantium, nostrum nam ipsa corporis! Fuga a provident exercitationem facilis.
        Eligendi, magni quod laudantium optio ipsa blanditiis id cupiditate, saepe repellat deleniti tempora eaque facere explicabo fugit labore. Debitis itaque excepturi eum minus ipsum molestiae qui voluptates quia velit neque.</p>
        <button>Get More Info</button>
      </div>
    </>
  )
}

export default About