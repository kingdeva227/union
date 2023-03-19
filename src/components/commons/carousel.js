
const img = "https://img.freepik.com/premium-vector/businessman-icon-vector-white-background-profile-avatar-user-icon_820464-233.jpg"

const Carousel = (props) => {
    return (
        <div className="container-lg my-3">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel indicators */}
            <ol className="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#myCarousel" data-bs-slide-to={1} />
                <li data-bs-target="#myCarousel" data-bs-slide-to={2} />
            </ol>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img} className=" img-fluid d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src={img} className=" img-fluid d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src={img} className=" img-fluid d-block w-100" alt="Slide 3" />
                </div>
            </div>
            {/* Carousel controls */}
            <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    </div>);

}
export default Carousel;    