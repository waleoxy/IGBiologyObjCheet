import React, { useEffect, useState } from 'react';
import {bannerImage} from "../context/bannerImage";
import "./Banner.css"

function Banner() {

const [currPageIndex, setCurrPageIndex] = useState(0)
const delay = 2500

 useEffect(() => {
    setTimeout(
      () =>
        setCurrPageIndex((prevPageIndex) =>
          prevPageIndex === bannerImage.length - 1 ? 0 : prevPageIndex + 1
        ),
      delay
    );
    return () => {};
  }, [currPageIndex]);
console.log('usr', currPageIndex);
console.log('img', bannerImage);

  return (
      <div className="main">
       <div className="banner__container" style ={{
            transform: `translate(${-currPageIndex * 100}%, 0)`
        }}>

      {bannerImage.map((image, index) =>(
         <header key={index} className="banner" style ={{
            backgroundSize:'cover',
            backgroundImage:`url(${image.url})`,
            backgroundPosition: 'cover cover'
        }}>
      
          <div className="banner__content">
              <h1 className="banner__title">Hello</h1>
              <div className="banner__buttons" >
                 <button className="banner__button">Play</button >
                 <button className="banner__button">My List</button >
              </div>
             
          </div>
           <div className="slideshowDots">
          {bannerImage.map((_, idx) => (
            <div key={idx} className="slideshowDot"></div>
          ))}
          </div>
        <div className="banner__fadeBottom"/>
        </header>

      ))}
      </div>
      </div>
    )
}

export default Banner
