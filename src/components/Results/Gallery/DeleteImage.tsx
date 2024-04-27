import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { Server } from "../../../util/url";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

const DeleteImage = () => {
  const [images, setImages] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(Server("/api/v1/gallery"));
        console.log(response.data);

        setImages(response.data.images);
        setImagesCount(response.data.count);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
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
      // Make a POST request to delete the image with the given ID
      await axios.delete(Server(`/api/v1/gallery/${imageId}`), {
        withCredentials: true,
      });
      toast.success(`Image deleted`);
      // Remove the deleted image from the images state
      setImages(images.filter((image: any) => image.id !== imageId));

      // Update the images count
      setImagesCount((prevCount) => prevCount - 1);

      // Close the confirmation dialog
      setDeleteConfirmationOpen(false);
    } catch (error) {
      toast.error("Error deleting image");

      console.error("Error deleting image:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
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
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  backgroundImage: `url(${image.path})`, // Correct format for backgroundImage
                  backgroundSize: "cover", // Adjust as needed
                  backgroundPosition: "center", // Adjust as needed
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "32px", // Increase icon size
                    color: "red", // Change icon color to red
                  }}
                  onClick={() => handleDeleteConfirmationOpen(image.id)}
                >
                  <DeleteIcon
                    sx={{
                      width: "100%",
                      height: "100%",
                      opacity: "60%",
                      ":hover": {
                        opacity: "100%",
                      },
                    }}
                  />
                </IconButton>
              </Box>
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
          <Typography>Are you sure you want to delete this image?</Typography>
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

export default DeleteImage;
