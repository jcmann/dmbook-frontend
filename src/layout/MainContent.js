import React from 'react';
import { useSelector } from 'react-redux';

import { Characters } from './mainContent/characters/Characters';
import { Encounters } from './mainContent/encounters/Encounters';
import { Home } from './mainContent/home/Home';

const styles = {
  border: '1px solid black',
};

export const MainContent = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);
  // let currentContent = "characters";
  console.log(`CurrentContent in MainContent: ${currentContent}`);

  return (
    <main className={'col-sm-8'} style={styles}>
      {currentContent === 'home' && <Home />}
      {currentContent === 'characters' && <Characters />}
      {currentContent === 'encounters' && <Encounters />}
    </main>
  );
};
