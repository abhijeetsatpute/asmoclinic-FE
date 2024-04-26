import React, { useState } from "react";
import axios from "axios";
import { Server } from "../../util/url";
import { TextField, Button, Box, Typography, Avatar } from "@mui/material";

const AddDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    fullname: "",
    occupation: "",
    image: "",
    info: {
      "Personal Information": [{ Birthday: "" }],
      Education: [],
      Degree: [],
      Category: [],
      Publications: [],
      Training: [],
      "Language skills": [],
    },
  });

  const [avatarURL, setAvatarURL] = useState("");

  const handleChange = (field: any, value: any) => {
    setDoctorData({
      ...doctorData,
      [field]: value,
    });
  };

  const handleImageUpload = async (event: any) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    try {
      const response = await axios.post(Server("/api/v1/upload"), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setDoctorData({
        ...doctorData,
        image: response.data.filePath,
      });
      setAvatarURL(URL.createObjectURL(event.target.files[0]));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(Server("/api/v1/doctors"), doctorData);
      // Reset the form after successful submission
      setDoctorData({
        fullname: "",
        occupation: "",
        image: "",
        info: {
          "Personal Information": [{ Birthday: "" }],
          Education: [],
          Degree: [],
          Category: [],
          Publications: [],
          Training: [],
          "Language skills": [],
        },
      });
      setAvatarURL("");
      // Handle success message or navigation if needed
      console.log("Doctor added successfully!");
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <div>
      <Typography variant="h2">Add Doctor</Typography>
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label="Full Name"
            value={doctorData.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
          />
          <TextField
            label="Occupation"
            value={doctorData.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
          />
          <Box p={2}>
            Add an image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ margin: "1rem 0" }}
            />
          </Box>

          {avatarURL && (
            <Avatar
              alt="Doctor Image"
              src={avatarURL}
              sx={{ width: 120, height: 120 }}
            />
          )}
          {/* Education */}
          <TextField
            label="Education"
            value={doctorData.info.Education.map((item) => Object.values(item))}
            onChange={(e) =>
              handleChange("info", {
                ...doctorData.info,
                Education: [{ [e.target.value]: "" }],
              })
            }
          />
          {/* Degree */}
          <TextField
            label="Degree"
            value={doctorData.info.Degree.map((item) => Object.values(item))}
            onChange={(e) =>
              handleChange("info", {
                ...doctorData.info,
                Degree: [{ [e.target.value]: "" }],
              })
            }
          />
          {/* Category */}
          <TextField
            label="Category"
            value={doctorData.info.Category.join(", ")}
            onChange={(e) =>
              handleChange("info", {
                ...doctorData.info,
                Category: e.target.value.split(", "),
              })
            }
          />
          {/* Publications */}
          <TextField
            label="Publications"
            value={doctorData.info.Publications.join("\n")}
            onChange={(e) =>
              handleChange("info", {
                ...doctorData.info,
                Publications: e.target.value.split("\n"),
              })
            }
            multiline
          />
          {/* Training */}
          <TextField
            label="Training"
            value={doctorData.info.Training.map((item) => Object.values(item))}
            onChange={(e) =>
              handleChange("info", {
                ...doctorData.info,
                Training: [{ [e.target.value]: "" }],
              })
            }
          />
          {/* Language skills */}
          <TextField
            label="Language skills"
            value={doctorData.info["Language skills"].join(", ")}
            onChange={(e) =>
              handleChange("info", {
                ...doctorData.info,
                "Language skills": e.target.value.split(", "),
              })
            }
          />
          <Button variant="contained" onClick={handleSubmit}>
            Add Doctor
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddDoctorForm;
