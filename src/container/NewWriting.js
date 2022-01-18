import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

export const NewWriting = () => {
  return (
    <form
      action="/writing/new"
      method="POST"
      style={{ width: "70%", margin: "4rem auto" }}
    >
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <h1>New Writing</h1>
        <h2 style={{ textAlign: "right" }}>Index: </h2>

        <TextField
          id="outlined-multiline-static"
          name="referenceNote"
          label="Reference Note"
          style={{ width: "100%" }}
          required
        />
        <TextField
          id="outlined-multiline-static"
          name="thought"
          label="Thought"
          multiline
          rows={16}
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
};
