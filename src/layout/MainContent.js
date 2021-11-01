import React from 'react';
import { useSelector } from 'react-redux';

import { Characters } from './mainContent/characters/Characters';
import AddNewCharacter from './mainContent/characters/AddNewCharacter';
import { CreateAccount } from './mainContent/createAccount/CreateAccount';
import { Encounters } from './mainContent/encounters/Encounters';
import AddNewEncounter from './mainContent/encounters/AddNewEncounter';
import { Home } from './mainContent/home/Home';
import { Login } from './mainContent/login/Login';

const styles = {
  border: '1px solid black',
};

export const MainContent = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);

  return (
    <main className={'col-sm-8'} style={styles}>
      {currentContent === 'home' && <Home />}
      {currentContent === 'login' && <Login />}
      {currentContent === 'createAccount' && <CreateAccount />}
      {currentContent === 'characters' && <Characters />}
      {currentContent === 'characters:add' && <AddNewCharacter />}
      {currentContent === 'encounters' && <Encounters />}
      {currentContent === 'encounters:add' && <AddNewEncounter />}
    </main>
  );
};
