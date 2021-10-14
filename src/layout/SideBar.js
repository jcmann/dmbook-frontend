import React from "react";
import { MainMenu } from "./MainMenu";
import { ToolMenu } from "./ToolMenu";

export const Sidebar = (props) => {
  return (
    <aside>
      <MainMenu />
      <ToolMenu />
    </aside>
  );
};
