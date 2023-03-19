
const img1 = "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5924.jpg";
const img2 = "https://as2.ftcdn.net/v2/jpg/00/34/71/49/1000_F_34714991_LS7RnWaqPc0LDC9P2g01SEcwNk6sKbpV.jpg";
const img3 = "https://as2.ftcdn.net/v2/jpg/00/76/14/87/1000_F_76148786_D1h7DkbF8YuQrdMJR0Fpwvu3DLhqeZwi.jpg";

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
                    <img src={img1} className=" img-fluid d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className=" img-fluid d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className=" img-fluid d-block w-100" alt="Slide 3" />
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
