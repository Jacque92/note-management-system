import * as React from "react";

import Box from "@mui/material/Box";
import { PostNote } from "../component/PostNote";

export const Gallery = (props) => {
  const { allNotes, allThoughts } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 3,
          width: 220,
          height: 220,
        },
      }}
    >
      {allNotes.map((note) => {
        return (
          <PostNote
            key={note.index}
            allNotes={allNotes}
            noteInfo={note}
            allThoughts={allThoughts}
          />
        );
      })}
    </Box>
  );
};
