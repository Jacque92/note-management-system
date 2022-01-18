import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { NewWriting } from "../container/NewWriting";
import { AllWriting } from "../container/AllWriting";

export const WritingPage = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<AllWriting />}></Route>
        {/* <Route
          path="/:index"
          element={<NewThought thoughtIndex={thoughtIndex} />}
        ></Route> */}
        <Route path="/new" element={<NewWriting />}></Route>
      </Routes>
    </div>
  );
};
