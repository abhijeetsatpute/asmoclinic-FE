import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CollapsibleGroup = ({ groupName, items }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Divider />
      <ListItemButton onClick={handleToggle}>
        <ListItemText
          primary={groupName}
          sx={{
            fontWeight: 800, // Adjust font weight here
            fontSize: "20px", // Adjust font size here
            color: "cornflowerblue",
          }}
        />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      {isOpen && (
        <List>
          {items.map((text: any) => (
            <Link
              key={text}
              to={`/admin/${groupName.toLowerCase()}/${text
                .split(" ")
                .slice(-1)}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </>
  );
};

export default CollapsibleGroup;
