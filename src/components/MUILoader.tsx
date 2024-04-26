import { CircularProgress } from "@mui/material";
import React from "react";

const MUILoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", // Adjust the height as needed
        bottom: "50%",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default MUILoader;
