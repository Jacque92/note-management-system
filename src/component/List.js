import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getNextIndex } from "../utilise";

export const List = (props) => {
  const { allNotes, allThoughts, allWritings } = props;

  return (
    <Box style={{ margin: "0 4rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {allWritings ? (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Topic</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allWritings.map((writing) => (
                <TableRow
                  key={writing.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`/writing/${writing.index}`}>
                      {writing.title}{" "}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{writing.topic}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Quote</TableCell>
                <TableCell align="right">Index</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allNotes.map((note) => (
                <TableRow
                  key={note.index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {note.quote || note.thought}
                  </TableCell>
                  <TableCell align="right">{note.index}</TableCell>
                  <TableCell align="right">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/${note.quote ? "reference" : "thought"}/${
                        note.index
                      }/sequence/${
                        note.quote
                          ? getNextIndex(allNotes, note.index)
                          : getNextIndex(allThoughts, note.index)
                      }`}
                    >
                      <Button variant="text">+sequence</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/thought/${note.index}/${getNextIndex(allThoughts)}`}
                    >
                      {note.quote ? (
                        <Button variant="text">+thought</Button>
                      ) : (
                        ""
                      )}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </Box>
  );
};
