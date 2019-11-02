import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Landing =()=> {
  const [flipped, setFlipped] = useState(false)
  console.log(`card${flipped && `is-flipped`}`)
  const isFlipped = flipped ? "card is-flipped" : "card"
  return (
    <div 
    className="landing-container"
    onClick={() => setFlipped(!flipped)}>
      <div className="landing-overlay">
        <div className={`${isFlipped}`}>
          <div className="card-face card-face-front">Welcome home. Click to learn more</div>
          <div className="card-face card-face-back">{flipped &&<Link className="nav-links prop-links" to="/properties">Gorgeous apartments, responsive staff, we make living care free. Click to view apartments</Link>}</div>
        </div>
      </div>
    </div>
  )
}

export default Landing