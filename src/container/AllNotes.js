import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { ViewController } from "../component/ViewController";
import { Gallery } from "../component/Gallery";
import { List } from "../component/List";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { getNextIndex } from "../utilise";

export const AllNotes = ({ activeTab }) => {
  const [allReferences, setAllReferences] = useState([]);
  const [allThoughts, setAllThoughts] = useState([]);

  let location = useLocation();
  useEffect(async () => {
    let data = await fetch("/reference/all");
    let notes = await data.json();
    setAllReferences(notes);
    data = await fetch("/thought/all");
    notes = await data.json();
    setAllThoughts(notes);
  }, []);

  const [referenceIndex, setReferenceIndex] = useState(0);
  const [view, setView] = useState("gallery");

  return (
    <div className="page">
      <h1>All {activeTab} Notes</h1>
      <ViewController setView={setView} />
      {view === "gallery" ? (
        <Gallery
          allNotes={activeTab === "Reference" ? allReferences : allThoughts}
          allThoughts={allThoughts}
        />
      ) : (
        <List
          allNotes={activeTab === "Reference" ? allReferences : allThoughts}
          allThoughts={allThoughts}
        />
      )}
      <Link
        id="addNew_btn"
        to={"/reference/new/" + `${getNextIndex(allReferences)}`}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};
