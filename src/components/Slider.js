import React from 'react';
import {bannerImage} from "../context/bannerImage";

function Slider() {
    console.log('img', bannerImage);
    return (
    <div className="slider">
        <div className="slideContent">
            {bannerImage.map((image, index) => (
            <div className="slide">
            <img key={Image.index} src={image.url} />
            </div>
            ))}
        </div>
    </div>
    )
}

export default Slider
