import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server } from "../../util/url";
import { Avatar, Card, CardContent, Typography, Box } from "@mui/material";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(Server("/api/v1/doctors"));
        setDoctors(response.data.doctors);
        setDoctorsCount(response.data.count);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

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
          All Doctors count : {doctorsCount}
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {doctors.map((doctor: any) => (
            <Card
              key={doctor.id}
              style={{ width: 300, margin: 10, borderRadius: 10 }}
            >
              <CardContent>
                <Box display="flex" justifyContent="center">
                  <Avatar
                    src={doctor.image}
                    variant="circular"
                    sx={{ width: 120, height: 120 }}
                  />
                </Box>
                <Typography variant="h5" component="div" align="center">
                  {doctor.fullname}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {doctor.occupation}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {doctor.specialization}
                </Typography>
                {/* Add more details as needed */}
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AllDoctors;
