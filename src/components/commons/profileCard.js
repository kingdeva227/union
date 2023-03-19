const img = "https://img.freepik.com/premium-vector/businessman-icon-vector-white-background-profile-avatar-user-icon_820464-233.jpg"

const profileCard = (props) => {
    return (

        <div class="col-lg-4 ">
            <div className="card rounded-0">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 class="card-title text-center">Name </h5>
                    <p class="card-text text-center">General Secretary</p>
                    <p class="card-text text-center">City</p>
                </div>
            </div>
        </div>

    );

}
export default profileCard;