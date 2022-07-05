import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <section className='page-header' style={{backgroundImage:"url('https://solverwp.com/demo/react/bizkar/assets/images/backgrounds/page-header-bg-1-1.jpg')", backgroundSize: "cover",
}}>
      <div className="cont_wrapper">
        <div className="cont_row">
          <div className="cont_column--col12">
            <h2>About Us</h2>
            <ul class="list-unstyled thm-breadcrumb">
              <li><a href="/">Home</a></li>
              <li><span>About Us</span></li>
            </ul>
          </div>
        </div>
      </div>    
    </section>
    <section className='section-class about-block-one'>
      <div className="cont_wrapper_fixed">
        <div className="cont_row">
          <div className="cont_column--col6">
            <div className="about_image">
              <img src="https://solverwp.com/demo/react/bizkar/assets/images/resources/about-page-moc-1.png" alt="about-page-moc-1"/>
            </div>
          </div>
          <div className="cont_column--col6">
            <div className="about__block">
              <div className="block-title-two text-left">
                <p>about us</p>
                <h3>
                  Exclusive Agency To <br /> Provide Soluation
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
              <ul className="list-unstyled video-one__list">
                <li>
                  <i className="fa fa-check"></i>Smashing Book 6 Is Here New
                  Frontiers In Web Design
                </li>
                <li>
                  <i className="fa fa-check"></i>Introduction To Animation And The
                  iMessage App Store With Shruggie
                </li>
                <li>
                  <i className="fa fa-check"></i>Get Your Mobile Site Ready For The
                  2018 Holiday ways goods
                </li>
                <li>
                  <i className="fa fa-check"></i>Making Distributed Product Teams
                  Work More Efficiently other
                </li>
              </ul>
              <a className="thm-btn" href="#/service">
                Read More <i className="fa fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>      
    </>
  )
}

export default About
