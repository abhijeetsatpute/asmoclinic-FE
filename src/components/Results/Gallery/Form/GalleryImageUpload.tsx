import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Server } from "../../../../util/url";
import useGalleryStore from "../../../../store/galleryStore";

const Root = styled("div")({
  width: 500,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
});

const Input = styled("input")({
  display: "none",
});

const Img = styled("img")({
  height: 512,
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

interface ImageUploadCardProps {
  cardName: string;
  onFileUploaded: (file: File) => void; // Callback to handle file upload
}

const GalleryImageUpload: React.FC = () => {
  // const setImage = useDocFormStore((state: any) => state.setImage);
  const setImage = useGalleryStore((state: any) => state.setImage);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUploadClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImage(file);
      // onFileUploaded(file); // Call the callback to handle file upload
    }
  };

  return (
    <Box>
      <Card
        sx={{
          padding: "10px",
          // borderRadius: "20px",
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item mb={1}>
            <Img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : `${Server("/uploads/gallery/default.png")}`
              }
              alt="Selected"
            />
          </Grid>
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              component="span"
              sx={{
                bgcolor: "#457475",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Select Image
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={handleUploadClick}
              />
            </Button>
          </label>
        </Grid>
      </Card>
    </Box>
  );
};

export default GalleryImageUpload;
