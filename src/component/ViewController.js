import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

export const ViewController = (props) => {
  const { setView, activeTab } = props;
  const handleView = (key) => {
    setView(key);
  };

  return (
    <div style={{ textAlign: "right", padding: "2rem 2rem 1rem 0" }}>
      {activeTab === "Writing" ? (
        ""
      ) : (
        <>
          <Button variant="outlined" onClick={() => handleView("list")}>
            List View
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleView("gallery")}
            style={{ marginLeft: "1rem" }}
          >
            Gallery View
          </Button>
        </>
      )}
    </div>
  );
};
