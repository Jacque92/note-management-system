import * as React from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const AllWriting = () => {
  const location = useLocation();
  return (
    <div>
      <h1>All Writing</h1>
      <Link id="addNew_btn" to={location.pathname + "/new/"}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};
