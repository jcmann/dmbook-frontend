import { LoggedOutMenu } from "./LoggedOutMenu";
import { LoggedInMenu } from "./LoggedInMenu";

export const MainMenu = (props) => {
  const loggedInStatus = true;
  return (
    <nav>
      {loggedInStatus && <LoggedInMenu />}
      {!loggedInStatus && <LoggedOutMenu />}
    </nav>
  );
};
