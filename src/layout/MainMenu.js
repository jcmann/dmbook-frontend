import { LoggedOutMenu } from "./LoggedOutMenu";

export const MainMenu = (props) => {
  const isLoggedIn = false;
  return !isLoggedIn && <LoggedOutMenu />;
};
