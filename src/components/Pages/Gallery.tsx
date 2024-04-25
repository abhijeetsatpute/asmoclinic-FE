import React, { useState } from "react";

const Gallery = () => {
  const [fullPageImage, setFullPageImage] = useState("");

  const handleClick = (src: any) => {
    setFullPageImage(src);
  };

  const handleClose = () => {
    setFullPageImage("");
  };

  return (
    <main className="container">
      <div className="gallery d-flex mx-auto flex-column">
        <img
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src="assets/images/gallery/gallery-1.webp"
          alt="zoom"
          onClick={() => handleClick("assets/images/gallery/gallery-1.webp")}
        />
        <img
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src="assets/images/gallery/gallery-2.webp"
          alt="zoom"
          onClick={() => handleClick("assets/images/gallery/gallery-2.webp")}
        />
        <img
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src="assets/images/gallery/gallery-3.webp"
          alt="zoom"
          onClick={() => handleClick("assets/images/gallery/gallery-3.webp")}
        />
        <img
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src="assets/images/gallery/gallery-4.webp"
          alt="zoom"
          onClick={() => handleClick("assets/images/gallery/gallery-4.webp")}
        />
        <img
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src="assets/images/gallery/gallery-5.webp"
          alt="zoom"
          onClick={() => handleClick("assets/images/gallery/gallery-5.webp")}
        />
        <img
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src="assets/images/gallery/gallery-6.webp"
          alt="zoom"
          onClick={() => handleClick("assets/images/gallery/gallery-6.webp")}
        />
      </div>

      {fullPageImage && (
        <div
          id="fullpage"
          style={{
            display: "block",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${fullPageImage})`,
            zIndex: 1080,
          }}
          onClick={handleClose}
        ></div>
      )}
    </main>
  );
};

export default Gallery;
