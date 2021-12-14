import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Characters } from "./mainContent/characters/Characters";
import AddEditCharacter from "./mainContent/characters/AddEditCharacter";
import { Encounters } from "./mainContent/encounters/Encounters";
import AddEditEncounter from "./mainContent/encounters/AddEditEncounter";
import { Home } from "./mainContent/home/Home";
import { Login } from "./mainContent/login/Login";

const styles = {
  border: "1px solid black",
};

/**
 * This component acts as a pseudo-router to display the main content area. It relies on the currentContent
 * state object in the display slice to determine which content to display.
 *
 * Some content sections, namely characters and encounters, have either :add or :edit after their main content.
 * This is done to determine which form type to add (edit or add) when rendering that form, via the formType prop.
 */
export const MainContent = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);

  return (
    <main className={"col-sm-9"} style={styles}>
      {currentContent === "home" && <Home />}
      {currentContent === "login" && <Login />}
      {currentContent === "characters" && <Characters />}
      {currentContent === "characters:add" && (
        <AddEditCharacter formType="add" />
      )}
      {currentContent === "characters:edit" && (
        <AddEditCharacter formType="edit" />
      )}
      {currentContent === "encounters" && <Encounters />}
      {currentContent === "encounters:add" && (
        <AddEditEncounter formType="add" />
      )}
      {currentContent === "encounters:edit" && (
        <AddEditEncounter formType="edit" />
      )}
    </main>
  );
};
