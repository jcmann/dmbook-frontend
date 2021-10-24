import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentContent } from '../redux/displaySlice';
import { logOut } from '../redux/loginSlice';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { LogOutButton } from './mainContent/authComponents/LogOutButton';

const LoggedInMenu = () => {
  const dispatch = useDispatch();

  const navClickHandler = (newContentProvided) => {
    dispatch(changeCurrentContent({ newContent: newContentProvided }));
  };

  const homeClickHandler = (event) => {
    event.preventDefault();
    navClickHandler('home');
  };
  const charactersClickHandler = (event) => {
    event.preventDefault();
    navClickHandler('characters');
  };
  const encountersClickHandler = (event) => {
    event.preventDefault();
    navClickHandler('encounters');
  };
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(logOut());
    navClickHandler('home');
  };

  return (
    <ul>
      <li>
        <a href="#" onClick={homeClickHandler}>
          Home
        </a>
      </li>
      <li>
        <a href="#" onClick={charactersClickHandler}>
          Characters
        </a>
      </li>
      <li>
        <a href="#" onClick={encountersClickHandler}>
          Encounters
        </a>
      </li>
      <li>
        <LogOutButton />
      </li>
    </ul>
  );
};

export default LoggedInMenu;
