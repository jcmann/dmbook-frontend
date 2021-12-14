import React from "react";
import { MainMenu } from "./MainMenu";
import { ToolMenu } from "./ToolMenu";
import { useSelector } from "react-redux";

/*
  TODO: Make ToolMenu render dynamically depending on 
  what the current main content is. 
  - Pull from redux store state
  - Add to this component with useSelector
  - Pass props to ToolMenu
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
