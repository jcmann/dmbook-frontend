import React from 'react';
import { MainMenu } from './MainMenu';
import { ToolMenu } from './ToolMenu';

export const Sidebar = (props) => {
  return (
    <aside className="col-sm-3">
      <MainMenu />
      <ToolMenu />
    </aside>
  );
};
