import React from 'react'
import "./movieCard.css";
const MovieCard = ({name, release,image,type}) => {
  return (
    <>
        <div className="card">
            <div>
                <img  src={image} />
            </div>
            <div>
                <h1> {name}</h1>
                <h2>Released at: {release}</h2>
                <p>Type: {type}</p>
            </div>
        </div>
    </>
  )
}

export default MovieCard