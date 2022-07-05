import React from 'react'
import { Link } from 'react-router-dom'
import './FrontendHeader.css'

const FrontendHeader = () => {
  return (
    <>
      <div className='site-header'>
        <div className='cont_wrapper'>
          <div className='mainnav_logo-box'>
            <a href="#/">
              <img src="https://solverwp.com/demo/react/bizkar/assets/images/logo-full-light.png" alt="logo" />
            </a>
          </div>
          <div className='mainnav_mainnavigation'>
          <nav>
            <ul className="mainnav_navigationbox">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Testimonials</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Team</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>

            {/* <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/">About</a></li>
              <li><a href="#/">Services</a></li>
              <li><a href="#/">Product</a></li>
              <li><a href="#/">Testimonials</a></li>
              <li><a href="#/">Portfolio</a></li>
              <li><a href="#/">Pricing</a></li>
              <li><a href="#/">Team</a></li>
              <li><a href="#/">Blog</a></li>
              <li><a href="#/">FAQ</a></li>
              <li><a href="#/">Contact</a></li>
            </ul> */}
          </div>
        </div>      
      </div>
    </>
  )
}

export default FrontendHeader
