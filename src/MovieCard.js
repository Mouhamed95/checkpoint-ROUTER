import React, {} from 'react'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {

return (
  
  <div className='Props'>


      <h1> {props.title} </h1>
      <h3> {props.annonce} </h3>
      <Link to = {`description/${props.id}`}>
      <img src={props.postURL} alt={props.title} />
      </Link>
      <p> {props.description} </p>
      
 
 
  </div>
)

}

export default MovieCard ;