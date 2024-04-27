import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import { Server } from "../../util/url";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import MUILoader from "../MUILoader";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteResult = () => {
  const [images, setImages] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
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

    fetchDoctors();
  }, []);

  const handleDeleteConfirmationOpen = (imageId: any) => {
    setImageToDelete(imageId);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleDelete = async (imageId: any) => {
    try {
      await axios.delete(Server(`/api/v1/results/${imageId}`), {
        withCredentials: true,
      });
      toast.success(`Result deleted`);

      setImages(images.filter((image: any) => image.id !== imageId));
      setImagesCount((prevCount) => prevCount - 1);

      setDeleteConfirmationOpen(false);
    } catch (error) {
      toast.error("Error deleting result");
      console.error("Error deleting result:", error);
    }
  };

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
              <Box>
                <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
                  <figure slot="first" className="before">
                    <img width={"100%"} src={image.beforeImage} alt="Before" />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure slot="second" className="after">
                    <img width={"100%"} src={image.afterImage} alt="After" />
                    <figcaption>After</figcaption>
                  </figure>
                </ImgComparisonSlider>
              </Box>
              <Button
                sx={{
                  bgcolor: "#e05569",
                  fontWeight: 600,
                  fontSize: "16px",
                  ":hover": {
                    bgcolor: "#ad1e33",
                  },
                }}
                variant="contained"
                size="large"
                fullWidth
                onClick={() => handleDeleteConfirmationOpen(image.id)}
              >
                Delete Result
              </Button>
            </Card>
          ))}
        </div>
      </Card>
      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleDeleteConfirmationClose}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this result?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmationClose}>Cancel</Button>
          <Button onClick={() => handleDelete(imageToDelete)} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteResult;
