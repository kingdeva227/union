import React from "react";
import ProfileCard from "./commons/profileCard"

const OfficeBeares = (props) => {
    return (
        <div class="container-xxl  py-1 my-2">
            <h1 class="display-6 text-center p-4">Team</h1>
            <div class="row py-1 g-4">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    );

}
export default OfficeBeares;