import React from 'react';
import Banner from './components/Banner';
import RowOfCards from './components/RowOfCards';
import "./HomePage.css"

function HomePage() {
    return (
        <div className="home">
            <Banner/>
            <RowOfCards/>
        </div>
    )
}

export default HomePage
