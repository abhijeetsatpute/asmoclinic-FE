import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server } from "../../util/url";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import toast from "react-hot-toast";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<{
    id: string | number;
    fullname: string;
  } | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(Server("/api/v1/doctors"), {
          withCredentials: true,
        });
        setDoctors(response.data.doctors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDelete = async ({ id, fullname }: any) => {
    setSelectedDoctor({ id, fullname });
    setDeleteConfirmationOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(Server(`/api/v1/doctors/${selectedDoctor?.id}`), {
        withCredentials: true,
      });
      toast.success(`Doctor ${selectedDoctor?.fullname} deleted`);
      // After successful deletion, update the doctors state to remove the deleted doctor
      setDoctors(
        doctors.filter((doctor: any) => doctor.id !== selectedDoctor?.id)
      );
    } catch (error) {
      console.error("Error deleting doctor:", error);
    } finally {
      setDeleteConfirmationOpen(false);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmationOpen(false);
    setSelectedDoctor(null);
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
          fontFamily={"monospace"}
        >
          All Doctors count : <b style={{ color: "black" }}>{doctors.length}</b>
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
                <Box mt={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(doctor)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
        <Dialog open={deleteConfirmationOpen} onClose={cancelDelete}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography width={"100%"}>
              Are you sure you want to delete{" "}
              <b>{selectedDoctor && selectedDoctor?.fullname}</b>?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={cancelDelete}>
              Cancel
            </Button>
            <Button variant="outlined" onClick={confirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  );
};

export default AllDoctors;
