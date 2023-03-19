import React from "react";
import {Link } from "react-router-dom";
import logo from "../img/ailu-logo5.jpg";



const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom border-dark navbar-light sticky-top p-0 px-4 px-lg-5">
            <a href="index.html" className="navbar-brand d-flex align-items-center">
                <h4 className="m-0 text-dark">
                    <img className="img-fluid me-2" src={logo} alt="" style={{ width: "45px" }} />Telangana</h4>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-4 py-lg-0">
                    <Link  className="nav-item nav-link active" to="/">Home</Link>
                    <Link  className="nav-item nav-link" to="/constitution">Constitution</Link>
                    <div className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Office Bearers</Link>
                        <div className="dropdown-menu shadow-sm m-0">
                        <Link className="dropdown-item" to="/officeBeares">PRESIDENT</Link>
                        <Link className="dropdown-item" to="/officeBeares">VICE PRESIDENT</Link>
                        <Link className="dropdown-item" to="/officeBeares">JOINT SECRETARY</Link>
                        <Link className="dropdown-item" to="/officeBeares">MEMBERS</Link>
                        </div>
                    </div>
                    <Link  className="nav-item nav-link" to="/gallery">Gallery</Link>
                    <Link className="nav-item nav-link" to = "/contact">Contact</Link>
                    <Link  className="nav-item nav-link" to="/about">About</Link>

                </div>
                <div className="h-100 d-lg-inline-flex align-items-center d-none">
                    <a className="btn btn-square rounded-circle  text-primary me-2" href><i class="fa-brands fa-facebook"></i></a>
                    <a className="btn btn-square rounded-circle bg-dark text-primary me-2" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square rounded-circle bg-dark text-primary me-0" href><i className="fab fa-linkedin-in" /></a>
                </div>
            </div>
        </nav>
    );

}
export default Header;