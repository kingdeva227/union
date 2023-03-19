const img = "https://img.freepik.com/premium-vector/businessman-icon-vector-white-background-profile-avatar-user-icon_820464-233.jpg"
function HeroBanner (){
    return (<div className="container-xxl hero-header  py-5 mb-5">
    <div className="container-xxl py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 mb-3 animated slideInDown">Welcome to AILU Telangana</h1>
          <p className="animated slideInDown">We are All India Lawyers Union (AILU). We gathered together from the past 38 years. We love to support Advocates and Law Students.
            Our Slogan is Democracy, Secularism, Justice, Socialism.
          </p>
        </div>
        <div className="col-lg-6 animated fadeIn">
        <img className="img-fluid animated pulse infinite" style={{"-webkit-animation-duration":"3s","animation-duration":"3s"}} src={img} alt={{}}/>
        </div>
      </div>
    </div>
  </div>);
}
  
export default HeroBanner;