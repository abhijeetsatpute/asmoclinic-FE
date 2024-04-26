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
import { Server } from "../../../util/url";
import toast from "react-hot-toast";
import MUILoader from "../../MUILoader";

const AllImages = () => {
  const [images, setImages] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(Server("/api/v1/gallery"));
        setImages(response.data.images);
        setImagesCount(response.data.count);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching gallery images");
        console.error("Error fetching doctors:", error);
        setLoading(true);
      }
    };

    fetchDoctors();
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
          Gallery Images count : {imagesCount}
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {images.map((image: any) => (
            <Card
              key={image.id}
              style={{ width: 300, margin: 10, borderRadius: 10 }}
            >
              <CardContent
                sx={{
                  backgroundImage: `url(${image.path})`, // Correct format for backgroundImage
                  backgroundSize: "cover", // Adjust as needed
                  backgroundPosition: "center", // Adjust as needed
                  height: 200, // Set the height of the card content
                }}
              ></CardContent>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AllImages;
