import React, { useState, useRef } from "react"
import { useWindowDimensions } from "../utilhooks/useWindowDim"
import useOnClickOutside from "../utilhooks/useOnClickOutside"
import { Link } from 'react-router-dom';

export default function Header() {

  const { width } = useWindowDimensions();
  const collapseWidth = 1000;
  const headerRef = useRef();

  const [navDisplay, activateNavDisplay] = useState(false)

  useOnClickOutside(headerRef, () => activateNavDisplay(false))

  const links = [
    <Link key={1} className="header-text nav-links" to="/">Home</Link>,
    <Link key={2} className="header-text nav-links" to="/properties">Properties</Link>,
    <Link key={3} className="header-text nav-links" to="/login">Admin Login</Link>,
  ]

  return (
    <div ref={headerRef}>
      <header className="header space-between">
        <h1 className="header-text">Snacki Rents</h1>
        {width >= collapseWidth
          ? <ul className="nav-links">{links}</ul >
          :
          <button
            className={`menu-bar-${navDisplay}`}
            onClick={() => activateNavDisplay(!navDisplay)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
        }
      </header>
      <ul
        onMouseLeave={() => activateNavDisplay(!navDisplay)}
        onClick={() => activateNavDisplay(!navDisplay)}
        className={`menu-dropdown-${navDisplay}`}>
        {navDisplay === true && width < collapseWidth && links}
      </ul>
    </div >

  )
}