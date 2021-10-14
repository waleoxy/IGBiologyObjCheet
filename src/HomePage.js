import React from 'react';
import AboutPage from './AboutPage';
import Banner from './components/Banner';
import RowOfCards from './components/RowOfCards';
import "./HomePage.css"

function HomePage() {
    return (
        <>
        <div className="home" id="homes">
            <Banner/>
            <RowOfCards/>
        </div>
         <AboutPage/>
        </>
    )
}

export default HomePage
