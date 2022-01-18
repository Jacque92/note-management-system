import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "black" };
export function SideBar() {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 280,
        // maxWidth: 280,
        bgcolor: "background.paper",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <Link to="/reference" style={linkStyle}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Reference box" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/thought" style={linkStyle}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Thought box" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/writing" style={linkStyle}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Writing box" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Draft" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
