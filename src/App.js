import "./App.css";
import { NavBar } from "./component/NavBar";
import { SideBar } from "./component/SideBar";

//import pages
import { Home } from "./page/Home";

import { AllNotes } from "./container/AllNotes";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import { useState } from "react";
import { NewThought } from "./container/NewThought";
import { NewNote } from "./container/NewNote";

function App() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2}>
              <SideBar setActiveTab={setActiveTab} />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ backgroundColor: "whitesmoke", height: "95vh" }}
            >
              <Routes>
                <Route
                  path="/thought/:referenceindex/sequence/:index"
                  element={<NewThought />}
                ></Route>
                <Route
                  path="/thought/:referenceindex/:index"
                  element={<NewThought />}
                ></Route>
                <Route
                  path="/reference/:referenceindex/sequence/:index"
                  element={<NewNote />}
                ></Route>
                <Route
                  path="/reference/new/:index"
                  element={<NewNote />}
                ></Route>
                <Route
                  path="/*"
                  element={<AllNotes activeTab={activeTab} />}
                ></Route>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Router>
  );
}

export default App;
