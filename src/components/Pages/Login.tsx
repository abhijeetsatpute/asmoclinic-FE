import { ThemeProvider } from "@emotion/react";
import {
  Typography,
  createTheme,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import * as React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Server } from "../../util/url";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import Logo from "../../../public/assets/images/logo.png";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  React.useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("User");

    // If data exists
    if (storedData) {
      navigate("/Admin");
    }
  }, []);

  const navigate = useNavigate();
  const setAdminLogged = useAuthStore((state: any) => state.setAdminLogged);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginUser = {
      username: data.get("username"),
      password: data.get("password"),
    };
    if (!loginUser.username || !loginUser.password) {
      return toast.error("Enter Username & password", {
        style: {
          width: "2000px",
        },
      });
    }
    try {
      const res = await axios.post(Server(`/api/v1/users/login`), loginUser, {
        withCredentials: true, // without this cookies wont be set
      });
      if (res.status === 200) {
        toast.success("Logged in");
        //set global set of adminLogged to true

        localStorage.setItem("User", JSON.stringify(res.data));

        setAdminLogged(true);
        return navigate("/admin");
      }
    } catch (error) {
      toast.error("Invalid Login");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <img src="assets/images/logo.png" alt="zoom" height="95" />
          <Typography component="h1" variant="h2" fontWeight={900}>
            ADMIN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
