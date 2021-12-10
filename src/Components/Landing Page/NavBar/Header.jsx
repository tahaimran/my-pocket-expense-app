import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h3 className="navbar-brand" ><Link to="/">Chat App</Link></h3>
          <div className="nav d-flex justify-space-around" id="navbarSupportedContent">
            <ul className="nav mb-2 p-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link ">Feature</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Team</p>
              </li>
              <li className="nav-item">
                <p className="nav-link "> <Link to=''>Sign Up</Link> </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
export default Header