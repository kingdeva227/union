import InfoCard from './infoCard';
import ProfileCard from './profileCard'
import React from "react";

const CardsGrid = (props) =>{
    return(
        <div class="container-xxl  py-1 my-2">
            <div class="row py-1 g-4">
<InfoCard/>
<InfoCard/>
<InfoCard/>
 </div>
    </div>
    );
}
export default CardsGrid;