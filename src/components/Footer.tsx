import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start bg-white text-muted"
      style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
    >
      <section className="p-2">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <a href="index.html">
                <img
                  src="./assets/images/logo.png"
                  style={{ maxWidth: "60vw" }}
                  alt="Logo"
                  width="200px"
                  height="auto"
                />
              </a>
              <div className="p-4 pb-0">
                <section className="mb-4 gap-4 d-flex justify-content-center">
                  {/* Facebook */}
                  <a href="https://facebook.com" role="button">
                    <i className="bi text-primary bi-facebook"></i>
                  </a>
                  {/* Telegram */}
                  <a href="https://www.t.me/dermatovenerologia" role="button">
                    <i className="bi text-info bi-telegram"></i>
                  </a>
                  {/* Google */}
                  <a
                    href="https://www.google.com/search?q=asmoclinic"
                    role="button"
                  >
                    <i className="bi text-warning bi-google"></i>
                  </a>
                  {/* Instagram */}
                  <a href="https://instagram.com/asmoclinic" role="button">
                    <i className="bi text-danger bi-instagram"></i>
                  </a>
                </section>
                {/* Section: Social media */}
              </div>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <ul className="navbar-nav ">
                <li className="">
                  <Link className="nav-link" to="/">
                    Asosiy
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="team">
                    Jamoa
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="gallery">
                    Galereya
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="services">
                    Xizmatlar
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="results">
                    Natijalar
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="about">
                    Biz haqimizda
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <p>Mirobod tumani, Farg`ona yo`li ko`chasi 708-uy</p>
              <a className="nav-link" href="mailto:clinicasmo@gmail.com">
                clinicasmo@gmail.com
              </a>
              <br />
              <a className="nav-link" href="tel:+998555018866">
                +998 55 501 88 66
              </a>
              <br />
              <a className="nav-link" href="tel:+998909962370">
                +998 90 996 23 70
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        className="container d-flex justify-content-between w-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div className="text-center p-4">
          &copy; 2022 Copyright. Asmo Clinic
        </div>
        <div className="text-center p-4">
          <a className="text-reset" href="https://bladejoe.netlify.app">
            Made by X.B.M
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
