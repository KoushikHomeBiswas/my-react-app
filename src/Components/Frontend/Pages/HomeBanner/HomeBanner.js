import React from 'react'
import './HomeBanner.css';

import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

const indicators = (index) => (<div className="inactivedot"><span>0{index + 1}</span> <b></b></div>);

const HomeBanner = () => {
    
    const slideImages = [
      {
        id: "1",
        slideimg: 'https://solverwp.com/demo/react/bizkar/assets/images/resources/banner-4-1.png',
        alt:'bannerslide1',
        caption: 'success your mission <span>New</span>',
        caption2: 'Innovation <br/><span>Life With React</span>',
        caption3: 'We are professional'
      },
      {
        id: "2",
        slideimg: 'https://solverwp.com/demo/react/bizkar/assets/images/resources/banner-4-1.png',
        alt:'bannerslide2',
        caption: 'success your mission <span>New2</span>',
        caption2: 'Innovation <br/><span>Life With React2</span>',
        caption3: 'We are professional2'
      },
      {
        id: "3",
        slideimg: 'https://solverwp.com/demo/react/bizkar/assets/images/resources/banner-4-1.png',
        alt:'bannerslide3',
        caption: 'success your mission <span>New3</span>',
        caption2: 'Innovation <br/><span>Life With React3</span>',
        caption3: 'We are professional3'
      },
    ];  

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
    };


  return (
    <>
      <div className='banner-block'>
        <div className='cont_wrapper'>
          <div className='cont_row'>
            <div className='cont_column--col12'>

            <Slide {...properties} indicators={indicators} scale={1.3}>
              {slideImages.map((slideImage, index) => (
                <div className='banner_content' key={index}>
                  <h4 dangerouslySetInnerHTML={{__html: slideImage.caption}}></h4>
                  <h3 dangerouslySetInnerHTML={{__html: slideImage.caption2}}></h3>
                  <p dangerouslySetInnerHTML={{__html: slideImage.caption3}}></p>
                  <a className="thm-btn banner_btn" href="#/service">Download Now <i className="fa fa-angle-double-right"></i></a>
                  <div className="image-container">
                    <img src={slideImage.slideimg} alt={slideImage.alt} />
                  </div>                  
                </div>
                ))}
            </Slide>
            </div>
          </div>
        </div>      
      </div>
    </>
  )
}

export default HomeBanner
