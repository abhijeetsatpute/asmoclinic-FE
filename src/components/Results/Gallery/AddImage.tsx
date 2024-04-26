import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Card,
  Typography,
  Box,
  Modal,
  Alert,
  IconButton,
} from "@mui/material";
import axios from "axios";
import GalleryImageUpload from "./Form/GalleryImageUpload";
import useGalleryStore from "../../../store/galleryStore";
import { CheckCircleOutline } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";

const AddImage: React.FC = () => {
  const [open, setOpen] = useState(false); // State to control modal open/close
  const image = useGalleryStore((state: any) => state.image);
  const setImage = useGalleryStore((state: any) => state.setImage);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      return toast.error("Select the image");
    }

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/api/v1/gallery/",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        handleOpen(); // Open success modal
      }
    } catch (error) {
      toast.error("Cant upload the image");

      console.error("Error:", error);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: "20px",
        bgcolor: "#e7f1f1",
      }}
    >
      <Typography
        variant="h4"
        p={1}
        fontWeight={600}
        bgcolor={"#6aa9"}
        textAlign={"center"}
        color={"whitesmoke"}
      >
        Add Gallery Image
      </Typography>

      <form onSubmit={handleSubmit}>
        <GalleryImageUpload />
        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#5d9f9f",
            fontWeight: 600,
            fontSize: "16px",
            height: "60px",
            ":hover": {
              bgcolor: "#365c5c",
            },
          }}
        >
          Upload
        </Button>
      </form>

      {/* Success Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="success-modal"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <CheckCircleOutline sx={{ color: "green", fontSize: 48 }} />
          <Typography variant="h6" component="h2" mb={2}>
            Success!
          </Typography>
          <Alert severity="success">Gallery Image uploaded successfully.</Alert>
        </Box>
      </Modal>
    </Card>
  );
};

export default AddImage;
