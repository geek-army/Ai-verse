import React from 'react'
import './Card.css'


// A single object is comming 
const Card = ({data}) => {
  
  return (
    <div className='card'>
     <p>{data.desc}</p>
     <img src={data.img}/>
    </div>
  )
}

export default Card