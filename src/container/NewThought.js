import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation } from "react-router";

export function NewThought() {
  const location = useLocation();
  let prevIndex = location.pathname.split("/")[2];
  let newIndex =
    location.pathname.split("/")[4] || location.pathname.split("/")[3];

  return (
    <form
      action={`/thought/${prevIndex}/${newIndex}`}
      method="POST"
      style={{ width: "70%", margin: "4rem auto" }}
    >
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <h1>New Thought Note</h1>
        <h2 style={{ textAlign: "right" }}>Index: {newIndex}</h2>

        <TextField
          id="outlined-multiline-static"
          name="thought"
          label="Thought"
          multiline
          rows={12}
          style={{ width: "100%" }}
          required
        />
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="topic"
          label="Topic"
          variant="outlined"
          required
        />
        <p>References Note Index: {prevIndex}</p>

        <div style={{ textAlign: "right" }}>
          <Button variant="outlined" size="large">
            Cancel
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            variant="contained"
            size="large"
            type="submit"
          >
            Save
          </Button>
        </div>
      </Box>
    </form>
  );
}
