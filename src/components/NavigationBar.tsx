const NavigationBar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav
      className="navbar sticky-lg-top navbar-expand-lg bg-white"
      style={{
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
      }}
    >
      <div className="container d-flex justify-content-between">
        <a href="index.html">
          <img
            className="navbar-brand"
            src="assets/images/logo.png"
            width="200"
            height="auto"
            style={{ maxWidth: "200px", width: "100vw" }}
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav text-center d-flex ms-auto align-items-center">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                href="/"
              >
                Asosiy
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/team" ? "active" : ""
                }`}
                href="/team"
              >
                Jamoa
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/gallery" ? "active" : ""
                }`}
                href="/gallery"
              >
                Galereya
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/results" ? "active" : ""
                }`}
                href="/results"
              >
                Natijalar
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/about" ? "active" : ""
                }`}
                href="/about"
              >
                Biz haqimizda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./../ru/index.html">
                <img
                  src="./assets/images/lang.png"
                  width="80"
                  height=""
                  alt="tilni tanlash"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
