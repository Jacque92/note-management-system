import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import Paper from "@mui/material/Paper";

export function NewThought(props) {
  let { thoughtIndex, thoughtNotes } = props;
  // console.log(thoughtIndex);
  const location = useLocation();

  let sequence;

  // const [index, setIndex] = useState("");

  let index;
  let prevIndex = location.pathname.split("/")[2];

  if (location.pathname.split("/")[3] === "sequence") {
    let number = thoughtIndex.split("(")[0];
    let letter = thoughtIndex.match(`[a-z]`)[0];
    let nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
    thoughtIndex = thoughtIndex.replace(number, prevIndex.split("(")[0]);
    thoughtIndex = thoughtIndex.replace(letter, nextLetter);
  }

  return (
    <form
      action={`/thought/${prevIndex}/${thoughtIndex}`}
      method="POST"
      style={{ width: "70%", margin: "4rem auto" }}
    >
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <h1>New Thought Note</h1>
        <h2 style={{ textAlign: "right" }}>Index: {thoughtIndex}</h2>

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
