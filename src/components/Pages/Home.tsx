import axios from "axios";
import { useState, useEffect } from "react";
import { Server } from "../../util/url";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(Server("/api/v1/doctors"));
        setDoctors(response.data.doctors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const renderDoctorsList = () => {
    return doctors.map((doc: any) => {
      return (
        <Box height={"150%"}>
          <Link
            className="swiper-slide m-2 text-reset text-decoration-none"
            to={`/team/${doc.id}`}
          >
            <img
              className="img"
              src={`${Server(doc?.image)}`}
              alt="img"
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                verticalAlign: "bottom",
                height: "100% ",
                width: "100%",
                position: "static",
              }}
            />
            <div className="name">{doc?.fullname}</div>
            <div className="title">{doc?.occupation}</div>
          </Link>
        </Box>
      );
    });
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div
            className="d-flex justify-content-end g-5 py-5"
            style={{
              background: "center no-repeat",
              backgroundImage: `url('./assets/images/hero-bg.jpg')`,
              margin: "30px 0",
              backgroundSize: "cover",
              minHeight: "555px",
            }}
          >
            <div className="col-lg-6 col-12 text-center text-lg-end p-3">
              <h1
                className="lead my-3 fs-2 fw-bold p-5"
                style={{
                  background: "rgba(255, 255, 255, 0.55)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                }}
              >
                “Teringizga g`amxo`r va yaxshi munosabatda bo'ling. Siz uni
                butun umringiz davomida har kuni kiyasiz." - Rene Rulo
              </h1>
              <a
                href="tel:+998555018866"
                className="btn btn-primary rounded-5 btn-lg px-4 me-md-2"
              >
                Bog`lanish
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="d-flex justify-content-center flex-column align-items-center text-center">
          <h2 className="headline m-5">
            Asmo klinikasida davolanish bosqichlari
          </h2>
        </div>
      </section>
      <section className="container">
        <div className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 d-flex flex-row flex-wrap gap-5 align-items-center text-center justify-content-center">
          <div
            className="card rounded-4"
            style={{ width: "280px", height: "320px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between align-items-center p-4">
              <img
                src="assets/images/consult.svg"
                alt="zoom"
                height="95"
                width="80"
              />
              <h4 className="py-4">Konsultatsiya</h4>
              <p className="card-text">
                Yuqori malakali shifokorlardan konsultatsiya olish
              </p>
            </div>
          </div>

          <div
            className="card rounded-4"
            style={{ width: "280px", height: "320px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between align-items-center  p-4">
              <img
                src="assets/images/lupa.svg"
                alt="zoom"
                height="95"
                width="80"
              />
              <h4 className="py-4">Analiz</h4>
              <p className="card-text">
                Zamonaviy texnologiyalar yordamida yuqori sifatda va aniqlik
                kafolatlangan holda analizlar topshirish
              </p>
            </div>
          </div>
          <div
            className="card rounded-4"
            style={{ width: "280px", height: "320px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between align-items-center  p-4">
              <img
                src="assets/images/detail.svg"
                alt="zoom"
                height="95"
                width="80"
              />

              <h4 className="py-4">Diagnoz </h4>
              <p className="card-text">
                Yuqori darajali shifokorlar tomonidan tashxis qo`yish
              </p>
            </div>
          </div>
          <div
            className="card rounded-4"
            style={{ width: "280px", height: "320px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between align-items-center  p-4">
              <img
                src="assets/images/frame.svg"
                alt="zoom"
                height="95"
                width="80"
              />
              <h4 className="py-4">Davolash</h4>
              <p className="card-text">
                Bemorga mos ravishda (statsionar yoki ambulator) davolash
                muolajalari
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-5">
        <div className="swiper">{renderDoctorsList()}</div>
        <a
          type="button"
          href="./team"
          className="btn btn-primary d-flex justify-content-center  rounded-5 btn-lg px-4"
          style={{ width: "300px", margin: "20px auto" }}
        >
          Ko`proq ma`lumot
        </a>
      </section>

      <section className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./assets/images/3Z8A9519.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./assets/images/3Z8A9522.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./assets/images/3Z8A9552.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <a
          href="./gallery.html"
          className="btn btn-primary d-flex justify-content-center  rounded-5 btn-lg px-4"
          style={{ width: "300px", margin: "20px auto" }}
        >
          Yana
        </a>
      </section>
      <section className="container my-5">
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCURfSrqGC"
          title="maps"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: "relative" }}
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default Home;
