import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Characters } from "./mainContent/characters/Characters";
import AddEditCharacter from "./mainContent/characters/AddEditCharacter";
import { CreateAccount } from "./mainContent/createAccount/CreateAccount";
import { Encounters } from "./mainContent/encounters/Encounters";
import AddEditEncounter from "./mainContent/encounters/AddEditEncounter";
import { Home } from "./mainContent/home/Home";
import { Login } from "./mainContent/login/Login";
import { initDatasetThunk } from "../redux/dataSlice";

const styles = {
  border: "1px solid black",
};

export const MainContent = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);

  return (
    <main className={"col-sm-9"} style={styles}>
      {currentContent === "home" && <Home />}
      {currentContent === "login" && <Login />}
      {currentContent === "createAccount" && <CreateAccount />}
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
