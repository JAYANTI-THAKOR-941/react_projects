// import React from 'react'
// import './style.css';

// const Card = (props) => {
//   return (
//     <div className='card'>
//         <h3>{props.name} </h3>
//     </div>
//   )
// }

// export default Card

// import React from 'react'
// import './style.css';

// const Card = ({name,price}) => {
//   return (
//     <div className='card'>
//         <h3>{name} </h3>
//         <p>Price:{price}</p>
//     </div>
//   )
// }

// export default Card


import React from 'react'
import './style.css';

const Card = ({services}) => {
  return (
    <>
        <div className="title">
            <h1>Engineering Solutions for Real-World Scale</h1>
            <p>We design, build, and optimize technology that’s secure, performant, and ready to grow with you.</p>
        </div>
        <div className='card-container'>
        {services.map(service=>(
            <div className="card" key={service.id}>
                <img src={service.image} alt="" />
                <div className="product-info">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <div className="bottom">
                        <p>Price : ₹{service.price}</p>
                        <div className="btns">
                            <button>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Card