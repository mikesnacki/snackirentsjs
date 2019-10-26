import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useSpring, animated as a } from 'react-spring'

const Landing =()=> {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div 
    className="landing-container"
    onClick={() => setFlipped(!flipped)}>
        <a.div 
        className="flip-card front" 
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          Welcome home. Click to learn more</a.div>
        <a.div 
            className="flip-card back" 
            style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
        >
            {flipped &&<Link className="nav-links" to="/properties">Gorgeous apartments, responsive staff, we make living care free. Click to view apartments</Link>}
        </a.div>
    </div>
  )
}

export default Landing