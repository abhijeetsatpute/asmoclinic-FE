import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Server } from "../../../../util/url";
import useGalleryStore from "../../../../store/galleryStore";
import useResultStore from "../../../../store/resultStore";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

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

const ResultImageUpload: React.FC = () => {
  // const setImage = useDocFormStore((state: any) => state.setImage);
  const setBeforeImage = useResultStore((state: any) => state.setBeforeImage);
  const setAfterimage = useResultStore((state: any) => state.setAfterimage);

  const [beforeselectedFile, setBeforeSelectedFile] = useState<File | null>(
    null
  );
  const [afterselectedFile, setAfterSelectedFile] = useState<File | null>(null);

  const handleBeforeUploadClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setBeforeSelectedFile(file);
      setBeforeImage(file);
      // onFileUploaded(file); // Call the callback to handle file upload
    }
  };

  const handleAfterUploadClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setAfterSelectedFile(file);
      setAfterimage(file);
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
          {/* <Grid item mb={1}>
            <Img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : `${Server("/uploads/gallery/default.png")}`
              }
              alt="Selected"
            />
          </Grid> */}
          <Card style={{ width: 320, margin: 10 }}>
            <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
              <figure slot="first" className="before">
                <img
                  width={"100%"}
                  style={{
                    objectFit: "contain",
                  }}
                  src={
                    beforeselectedFile
                      ? URL.createObjectURL(beforeselectedFile)
                      : `${Server("/uploads/gallery/default.png")}`
                  }
                />
                <figcaption>Before</figcaption>
              </figure>
              <figure slot="second" className="after">
                <img
                  width={"100%"}
                  style={{
                    objectFit: "contain",
                  }}
                  src={
                    afterselectedFile
                      ? URL.createObjectURL(afterselectedFile)
                      : `${Server("/uploads/gallery/default.png")}`
                  }
                />
                <figcaption>After</figcaption>
              </figure>
            </ImgComparisonSlider>
          </Card>
          <label htmlFor="before-button-file">
            <Button
              variant="contained"
              component="span"
              sx={{
                bgcolor: "#457475",
                fontWeight: 600,
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              Select Before Image
              <Input
                accept="image/*"
                id="before-button-file"
                type="file"
                onChange={handleBeforeUploadClick}
              />
            </Button>
          </label>
          <label htmlFor="after-button-file">
            <Button
              variant="contained"
              component="span"
              sx={{
                bgcolor: "#457475",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Select After Image
              <Input
                accept="image/*"
                id="after-button-file"
                type="file"
                onChange={handleAfterUploadClick}
              />
            </Button>
          </label>
        </Grid>
      </Card>
    </Box>
  );
};

export default ResultImageUpload;
