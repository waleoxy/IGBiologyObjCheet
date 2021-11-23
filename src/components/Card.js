import React from 'react';
import { bannerImage } from '../context/bannerImage';
import "./Card.css"

function Card() {
    return (
        <div className="row justify-content-center">
        {bannerImage.map(image =>(
            <div className='card-element col-12 col-sm-6 col-md-4 col-lg-3 my-3 '>
            <div className="card" style={{height:'32rem', width:'20rem'}}>
            <img className="card-img-top" src={image.url} alt="image"/>
            <div className="card-body">
                <div>
                    <h5 className="card-title">{image.name}</h5>
                    <p className="card-text">{image.text}</p>
                </div>
                <a href="#" className="btn btn-primary">Go there</a>
            </div>
            </div>
         </div>
        
        ))}
         </div>
    )
}

export default Card
