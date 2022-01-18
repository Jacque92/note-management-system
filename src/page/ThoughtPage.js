import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { AllThoughts } from "../container/AllThoughts";
import { NewThought } from "../container/NewThought";

export const ThoughtPage = () => {
  //   const [thoughtIndex, setThoughtIndex] = useState("1(a)");
  const [allThoughts, setAllThoughts] = useState([]);
  let thoughtIndex = "1(a)";
  //load Thought note data
  useEffect(async () => {
    let data = await fetch("/thought/all");
    let notes = await data.json();
    setAllThoughts(notes);
  }, []);

  let count = 1;
  let regExp = new RegExp(/^\d+[(]a/);
  if (allThoughts.length > 0) {
    allThoughts.map((thought) => {
      if (regExp.test(thought.index)) {
        count++;
      }
    });
  }

  thoughtIndex = count.toString() + "(a)";

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={<AllThoughts allThoughts={allThoughts} />}
        ></Route>
        <Route
          path="/:index"
          element={<NewThought thoughtIndex={thoughtIndex} />}
        ></Route>
        <Route
          path="/:index/sequence"
          element={<NewThought thoughtIndex={thoughtIndex} />}
        ></Route>
      </Routes>
    </div>
  );
};
