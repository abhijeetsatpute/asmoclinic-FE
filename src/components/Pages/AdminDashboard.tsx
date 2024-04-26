import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import CollapsibleGroup from "../CollapsibleGroup";
import { Server } from "../../util/url";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const drawerWidth = 240;

export default function ResponsiveDrawer({ children }: any) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const logoutHandler = async () => {
    try {
      const response = await axios.get(Server("/api/v1/users/logout"), {
        withCredentials: true,
      });
      if (response.status == 200) {
        toast.success("Logged out");
        return navigate("/");
      }
    } catch (error) {
      toast.error("Something wrong");
    }
  };

  const drawer = (
    <div>
      <Toolbar
        children={
          <a href="/admin">
            <img
              src="../../assets/images/logo.png"
              alt="Asmo Clinic"
              height="40rem"
            />
          </a>
        }
      />
      <Divider />

      <Typography variant="h5" p={1}>
        Overview
      </Typography>

      <List>
        <CollapsibleGroup
          groupName="Doctors"
          items={["See All", "Add", "Delete"]}
        />
      </List>

      <List>
        <CollapsibleGroup
          groupName="Results"
          items={["See All", "Add", "Delete"]}
        />
      </List>

      <List>
        <CollapsibleGroup
          groupName="Gallery"
          items={["See All", "Add", "Delete"]}
        />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#6aaf",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            fontFamily={"monospace"}
          >
            Admin Dashboard
          </Typography>
          <IconButton
            onClick={logoutHandler}
            color="inherit"
            aria-label="logout"
            edge="end"
            sx={{ ml: "auto" }}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
