import React from "react";
import "../css/style.css"

const Footer = (props) => {
    return (
<div className="container-fluid border-top border-dark footer mt-5 pt-2 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">

      <div className="col-lg-3 col-md-6">
        <h5 className="mb-4">Get In Touch</h5>
        <p><i className="fa fa-map-marker-alt me-3" />123 Street, Hyderabad, TS</p>
        <p><i className="fa fa-phone-alt me-3" />+91 9876543210</p>
        <p><i className="fa fa-envelope me-3" />info@example.com</p>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="mb-4">Quick Links</h5>
        <a className="btn btn-link" href>About Us</a>
        <a className="btn btn-link" href>Contact Us</a>
        <a className="btn btn-link" href>Terms &amp; Condition</a>
      </div>
      <div className="col-md-6">
        <h5 className="mb-4">Newsletter</h5>
        <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
        <div className="position-relative">
          <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
          <button type="button" className="btn border py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
        </div>
      </div>
    </div>
  </div>
  </div>
    );
}
export default Footer;