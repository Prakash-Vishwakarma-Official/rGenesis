import React from "react";
import "./Navbar.css";
// import face from "./assets/face.jpg";

const Navbar = () => {
  var nav = document.querySelector("nav");

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.pageYOffset > 100) {
      console.log("true");
      nav.classList.add("bg-dark", "shadow");
      console.log("true:::::");
    } else {
      console.log("false");
      nav.classList.remove("bg-dark", "shadow");
      console.log("false:::::");
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      {/* <!-- Navbar  --> */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            R.GENESIS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav respoColor">
              <li className="nav-item CMA">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item CMA ">
                <a className="nav-link text-white" href="#">
                  Servives
                </a>
              </li>
              <li className="nav-item CMA">
                <a className="nav-link text-white" href="#">
                  Tesimonials
                </a>
              </li>
              <li className="nav-item CMA">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>

              <nav className="navbar navbar-light ">
                <form className="container-fluid justify-content-start">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    type="button"
                  >
                    CONTACT US
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    type="button"
                  >
                    Purchase
                  </button>
                </form>
              </nav>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Banner Image  --> */}
      <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center mainDiv ">
        <div className="content text-center mainDivLeft d-flex justify-content-center align-items-center flex-column">
          <h1 className="animate__animated animate__fadeInUp">
            Create powerful website in <br /> just moment with RGen
          </h1>
          <p className="animate__animated animate__fadeInUp">
            Easy and flexible way to create powerful landing pages with <br />{" "}
            lots of design and customization options
          </p>
          <span className="animate__animated animate__fadeInUp">
            <button type="button" className="btn btn-outline-light me-5">
              BUY NOW
            </button>
            <button type="button" className="btn btn-outline-light">
              Take quick tour
            </button>
          </span>
        </div>
        <div className="content text-center mainDivRight d-flex justify-content-center align-items-center flex-column"></div>
      </div>
    </>
  );
};

export default Navbar;
