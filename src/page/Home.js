import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Home = () => {
  return (
    <div className="page">
      <Box sx={{ width: "65%" }}>
        <Typography variant="h4" gutterBottom component="div">
          Project Background
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          Many people who are known as knowledgeable read lots of books and make
          good use of what they read to solve problems. Some people read lots of
          books, too, but they forget what they read quickly or feel hard to
          establish connections between knowledge knots. I've seen Knowledge
          System mentioned by people like Bill Gates, Charlie Munger, and
          looking for ways to establish my own knowledge system.
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          There are many software and Apps that can help to do part of this job,
          For instance, oneNote, Notion, MindMap and so on, but neither of them
          fit the purpose well.
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          A book named "How to take smart notes: one simple technique to boost
          writing, learning and thinking" inspired me to build this web app
          followed the note-taking method mentioned in this book.
        </Typography>

        <Typography variant="body1" gutterBottom component="div">
          There are many software and Apps that can help to do part of this job,
          For instance, oneNote, Notion, MindMap and so on, but neither of them
          fit the purpose well.
        </Typography>

        <Typography variant="h4" gutterBottom component="div">
          Instructions
        </Typography>

        <ul>
          <li>
            <Typography variant="body1" gutterBottom component="div">
              Open Reference Box and Add a new note if you want to take notes on
              what you are reading.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom component="div">
              In reference box, if you have some thoughts, ideas on a
              literature/reference note, click "+ thought" button to add a
              thought note. You can add sequencial reference note by clicking "+
              sequence" button.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom component="div">
              If you have more thoughts on one reference note, you can either go
              to reference box or thought box to add new thought by clicking "+
              thought" button.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom component="div">
              Once you've got lots of thoughts on a specific topic, you might
              want to write some text down to sort out those ideas. Writing box
              is here for you. With reference notes and thought notes at side,
              you will be clear and well-prepared to start writing.
            </Typography>
          </li>
        </ul>
      </Box>
    </div>
  );
};
