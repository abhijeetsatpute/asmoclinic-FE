import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
// import { Server } from "../../../util/url";
import toast from "react-hot-toast";
import { Server } from "../../util/url";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
// import MUILoader from "../../MUILoader";
import "./Result.css";
import MUILoader from "../MUILoader";

const AllResults = () => {
  const [images, setImages] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(Server("/api/v1/results"));

        setImages(response.data.results);
        setImagesCount(response.data.count);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching gallery images");
        console.error("Error fetching doctors:", error);
        setLoading(true);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <MUILoader />;
  }

  return (
    <div>
      <Card
        sx={{
          borderRadius: "20px",
          bgcolor: "#e7f1f1",
        }}
      >
        <Typography
          variant="h4"
          mb={1}
          p={1}
          fontWeight={600}
          bgcolor={"#6aa9"}
          textAlign={"center"}
          color={"whitesmoke"}
        >
          Results count : {imagesCount}
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {images?.map((image: any) => (
            <Card key={image.id} style={{ width: 300, margin: 10 }}>
              <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
                <figure slot="first" className="before">
                  <img width={"100%"} src={image.beforeImage} />
                  <figcaption>Before</figcaption>
                </figure>
                <figure slot="second" className="after">
                  <img width={"100%"} src={image.afterImage} />
                  <figcaption>After</figcaption>
                </figure>
              </ImgComparisonSlider>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AllResults;
