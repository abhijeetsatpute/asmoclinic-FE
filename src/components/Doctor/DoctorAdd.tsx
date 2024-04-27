import React, { useState } from "react";
import { TextField, Grid, Button, Card, Typography, Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ImageUploadCard from "./Form/ImageUploadCard";
import axios from "axios";
import useDocFormStore from "../../store/docForm";
import Languages from "./Form/Language";
import Educations from "./Form/Education";
import Trainings from "./Form/Training";
import Degree from "./Form/Degree";

const SimpleForm: React.FC = () => {
  const docData = useDocFormStore((state: any) => state.docData);

  const fullname = useDocFormStore((state: any) => state.docData.fullname);
  const occupation = useDocFormStore((state: any) => state.docData.occupation);
  const category = useDocFormStore(
    (state: any) => state.docData.info.Category[0]
  );
  const birthday = useDocFormStore(
    (state: any) => state.docData.info["Personal Information"][0].Birthday
  );
  const publications = useDocFormStore(
    (state: any) => state.docData.info.Publications[0]
  );
  const scienceArticles = useDocFormStore(
    (state: any) => state.docData.info["Science articles"][0]
  );
  const setFullname = useDocFormStore((state: any) => state.setFullname);
  const setOccupation = useDocFormStore((state: any) => state.setOccupation);
  const setBirthday = useDocFormStore((state: any) => state.setBirthday);
  const setCategory = useDocFormStore((state: any) => state.setCategory);
  const setPublications = useDocFormStore(
    (state: any) => state.setPublications
  );
  const setScienceArticles = useDocFormStore(
    (state: any) => state.setScienceArticles
  );

  const [errors, setErrors] = useState<any>({
    fullname: "",
    occupation: "",
    category: "",
    birthday: "",
    // Add more fields if needed
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation
    let valid = true;
    const newErrors: any = {};

    if (!docData.fullname) {
      newErrors.fullname = "Fullname is required";
      valid = false;
    }

    if (!docData.occupation) {
      newErrors.occupation = "Occupation is required";
      valid = false;
    }

    // TODO
    // Add more validation rules for other fields

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullname", docData.fullname);
      formData.append("occupation", docData.occupation);
      formData.append("image", docData.image);
      //  TODO fix
      formData.append("info", JSON.stringify(docData.info));
      const response = await axios.post(
        "http://localhost:5000/api/v1/doctors/",
        formData,
        {
          withCredentials: true, // without this cookies wont be set
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      // Reset errors if submission is successful
      setErrors({});
    } catch (error) {
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
        mb={1}
        p={1}
        fontWeight={600}
        bgcolor={"#6aa9"}
        textAlign={"center"}
        color={"whitesmoke"}
      >
        Add Doctor
      </Typography>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Image */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Image"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <ImageUploadCard />
            </Grid>

            {/* Fullname */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Fullname"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                label={"Fullname"}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                fullWidth
                error={!!errors.fullname}
                helperText={errors.fullname}
              />
            </Grid>

            {/* Occupation */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Occupation"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                label={"Occupation"}
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                fullWidth
                error={!!errors.occupation}
                helperText={errors.occupation}
              />
            </Grid>

            {/* Category */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Category"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                label={"Category"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
              />
            </Grid>

            {/* Birthday */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Birthday"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Birth Date"
                    value={birthday}
                    onChange={(date) => {
                      setBirthday(date);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            {/* Education */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Education"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <Educations />
            </Grid>

            {/* Degree */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Degree"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <Degree />
            </Grid>

            {/* Training */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Training"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <Trainings />
            </Grid>

            {/* Publications */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Publications"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                label={"Publications"}
                value={publications}
                onChange={(e) => setPublications(e.target.value)}
                fullWidth
              />
            </Grid>

            {/* Science articles */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Science articles"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                label={"Science articles"}
                value={scienceArticles}
                onChange={(e) => setScienceArticles(e.target.value)}
                fullWidth
              />
            </Grid>

            {/* Language skills */}
            <Grid
              item
              xs={12}
              md={4}
              fontWeight={600}
              fontFamily={"monospace"}
              fontSize={"20px"}
            >
              <p>{"Language skills"}</p>
            </Grid>
            <Grid item xs={12} md={8}>
              <Languages />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: "#457475",
                  fontWeight: 600,
                  fontSize: "22px",
                }}
              >
                Add Doctor
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Card>
  );
};

export default SimpleForm;
