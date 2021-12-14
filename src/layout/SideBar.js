import React from "react";
import { MainMenu } from "./MainMenu";
import { ToolMenu } from "./ToolMenu";
import { useSelector } from "react-redux";

/**
 * This builds the entire side menu, containing both the main menu and, if appropriate, the tool menu with the
 * button to add a new character or encounter
 */
export const Sidebar = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);

  return (
    <aside className="col-sm-3 d-flex flex-column align-items-center">
      <MainMenu />
      {(currentContent == "characters" || currentContent == "encounters") && (
        <ToolMenu />
      )}
    </aside>
  );
};
