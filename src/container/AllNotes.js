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
  const [allWritings, setAllWritings] = useState([]);

  let location = useLocation();

  useEffect(async () => {
    let data = await fetch("/reference/all");
    let notes = await data.json();
    setAllReferences(notes);
    data = await fetch("/thought/all");
    notes = await data.json();
    setAllThoughts(notes);
    data = await fetch("/writing/all");
    notes = await data.json();
    setAllWritings(notes);
  }, []);

  const [view, setView] = useState("gallery");

  return (
    <div className="page">
      <h1>All {activeTab} Notes</h1>
      <ViewController setView={setView} activeTab={activeTab} />
      {activeTab === "Writing" ? (
        <List allWritings={allWritings} />
      ) : view === "gallery" ? (
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
      {activeTab === "Thought" ? (
        ""
      ) : (
        <Link
          id="addNew_btn"
          to={`${
            activeTab === "Reference"
              ? "/reference/new/" + getNextIndex(allReferences)
              : "/writing/new/" + getNextIndex(allWritings)
          }`}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      )}
    </div>
  );
};
