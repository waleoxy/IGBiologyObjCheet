import React from 'react';
import {bannerImage} from "../context/bannerImage";
import "./Banner.css"

function Banner() {


    return (
       <header className="banner" style ={{
            backgroundSize:'cover',
            backgroundImage:'',
            backgroundPosition: 'cover cover'
        }}>
          <div className="banner__content">
              <h1 className="banner__title">Hello</h1>
              <div className="banner__buttons" >
                 <button className="banner__button">Play</button >
                 <button className="banner__button">My List</button >
              </div>
              <h1 className="banner__description">
                              
                  <span
                    onClick
                    className="banner--descr--trunc">
                    
                  </span>
              </h1>
          </div>
        <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
