import * as React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";

import { NewNote } from "../container/NewNote";
import { SavedNote } from "../container/SavedNote";

import { AllReferences } from "../container/AllReferences";

export const ReferencePage = () => {
  const [referenceIndex, setReferenceIndex] = useState(0);
  const [allReferences, setAllReferences] = useState([]);

  //load Reference note data
  useEffect(async () => {
    let data = await fetch("/reference/all");
    let notes = await data.json();
    setAllReferences(notes);
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <AllReferences
              setReferenceIndex={setReferenceIndex}
              referenceIndex={referenceIndex}
              allReferences={allReferences}
            />
          }
        ></Route>
        <Route
          path={"/new/" + `${referenceIndex + 1}`}
          element={<NewNote referenceIndex={referenceIndex} />}
        ></Route>
        <Route
          path="/:index/sequence"
          element={
            <NewNote
              referenceIndex={referenceIndex}
              allReferences={allReferences}
            />
          }
        ></Route>
        <Route path="/:index" element={<SavedNote />}></Route>
      </Routes>
    </div>
  );
};
