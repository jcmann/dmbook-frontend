import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

import { Characters } from "./mainContent/characters/Characters";
import { Encounters } from "./mainContent/encounters/Encounters";

const styles = {
  border: "1px solid black",
};

export const MainContent = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);
  // let currentContent = "characters";
  console.log(`CurrentContent in MainContent: ${currentContent}`);

  return (
    <main style={styles}>
      {currentContent === "characters" && <Characters />}
      {currentContent === "encounters" && <Encounters />}
    </main>
  );
};
