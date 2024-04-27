import axios from "axios";
import React, { useEffect, useState } from "react";
import MUILoader from "../MUILoader";
import toast from "react-hot-toast";
import { Server } from "../../util/url";

const Gallery = () => {
  const [fullPageImage, setFullPageImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (src: any) => {
    setFullPageImage(src);
  };

  const handleClose = () => {
    setFullPageImage("");
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(Server("/api/v1/gallery"));
        setImages(response.data.images);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching gallery images");
        console.error("Error fetching doctors:", error);
        setLoading(true);
      }
    };

    fetchImages();
  }, []);

  const renderImageList = () => {
    return images.map((img: any) => {
      return (
        <img
          key={img.id}
          className="card rounded-4"
          style={{ maxWidth: "100%" }}
          src={img.path}
          alt="zoom"
          onClick={() => handleClick(img.path)}
        />
      );
    });
  };

  if (loading) {
    return <MUILoader />;
  }

  return (
    <main className="container">
      <div className="gallery d-flex mx-auto flex-column">
        {renderImageList()}
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
