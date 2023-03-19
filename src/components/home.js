import React from "react";
import HeroBanner from "./commons/heroBanner"
import CardsGrid from "./commons/CardsGrid"
import Carousel from "./commons/carousel"
import InfoCardx from "./commons/infoCardx";
import NewsCards from "./commons/newsCards";


function Home() {
    const data = {
        tittle: "Secularism",
        message: "2"
    }
    return (
        <div>
            <Carousel/>
            <HeroBanner />
            <CardsGrid />
            <InfoCardx/>
            <NewsCards/>
        </div>
    );
}

export default Home;