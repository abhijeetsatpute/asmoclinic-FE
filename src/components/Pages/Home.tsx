import React from "react";

const Home = () => {
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
            <div
              className="col-lg-6 col-12 text-center text-lg-end p-3"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <h1 className="lead my-3 fs-2 fw-bold p-5">
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
        <div className="swiper">
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-1.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Bahrom Ilamanovich</div>
            <div className="title">
              Tibbiyot fanlari nomzodi dotsent oliy toifali vrach
              dermatovenerolog
            </div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-2.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Murod Abdujabborovich</div>
            <div className="title">Oliy toifali shifokor dermatovenerolog</div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-8.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Evelina Vladimirovna</div>
            <div className="title">
              2-toifali shifokor dermatovenerolog dermatoskopist
            </div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-3.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Javohir Sharobidinovich</div>
            <div className="title">Vrach dermatavenerolog</div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-10.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Shahrizoda Bahodirovna</div>
            <div className="title">Bolalar ginekologi</div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href="./team/team-4.html"
          >
            <img
              className="img"
              src="./assets/images/avatar/team-4.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Barno Yo`ldashevna</div>
            <div className="title">Oliy toifali pediatr</div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-6.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Malika Axmadjonovna</div>
            <div className="title">UTT shifokori</div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-7.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Suhrob Saidaxmatovich</div>
            <div className="title">Vrach dermatavenerolog</div>
          </a>
          <a
            className="swiper-slide m-2 text-reset text-decoration-none"
            href=""
          >
            <img
              className="img"
              src="./assets/images/avatar/team-9.jpg"
              alt="img"
              width="150"
              height=""
            />
            <div className="name">Imil Ilnurovich</div>
            <div className="title">Vrach dermatavenerolog</div>
          </a>
        </div>
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
            {/* Additional carousel items go here */}
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
