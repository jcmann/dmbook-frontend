import { LoggedOutMenu } from './LoggedOutMenu';
import { LoggedInMenu } from './LoggedInMenu';
import { useSelector } from 'react-redux';

export const MainMenu = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <nav>
      {isLoggedIn && <LoggedInMenu />}
      {!isLoggedIn && <LoggedOutMenu />}
    </nav>
  );
};
