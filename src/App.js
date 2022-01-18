import "./App.css";
import { NavBar } from "./component/NavBar";
import { SideBar } from "./component/SideBar";

//import pages
import { Home } from "./page/Home";
import { ReferencePage } from "./page/ReferencePage";
import { ThoughtPage } from "./page/ThoughtPage";
import { WritingPage } from "./page/WritingPage";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ backgroundColor: "whitesmoke", height: "95vh" }}
            >
              <Routes>
                <Route path="/reference/*" element={<ReferencePage />}></Route>
                <Route path="/thought/*" element={<ThoughtPage />}></Route>
                <Route path="/writing/*" element={<WritingPage />}></Route>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/reference/*" element={<Board />}></Route>
                <Route path="/thought/*" element={<Board />}></Route>

                <Route
                  path="/thought/:index"
                  element={<SavedThought />}
                ></Route>
                <Route
                  path="/thought/:index/sequence"
                  element={<NewThought />}
                ></Route>
                <Route path="/writing" element={<NewNote />}></Route>
                <Route path="/writing/new" element={<NewWriting />}></Route> */}
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Router>
  );
}

export default App;
