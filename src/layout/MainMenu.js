import { LoggedOutMenu } from './LoggedOutMenu';
import LoggedInMenu from './LoggedInMenu';
import { useSelector } from 'react-redux';

export const MainMenu = (props) => {
  return (
    <nav>
      <LoggedInMenu />
    </nav>
  );
};
