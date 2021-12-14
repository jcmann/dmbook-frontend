import { useDispatch } from "react-redux";
import { changeCurrentContent } from "../redux/displaySlice";
import { LogOutButton } from "./mainContent/authComponents/LogOutButton";
import "../App.css";

/**
 * A menu that's displayed only when a user is currently logged in. It shows the main menu (home/characters/encounters/sign out).
 */
const LoggedInMenu = () => {
  const dispatch = useDispatch();

  const navClickHandler = (newContentProvided) => {
    dispatch(changeCurrentContent({ newContent: newContentProvided }));
  };

  const homeClickHandler = (event) => {
    event.preventDefault();
    navClickHandler("home");
  };
  const charactersClickHandler = (event) => {
    event.preventDefault();
    navClickHandler("characters");
  };
  const encountersClickHandler = (event) => {
    event.preventDefault();
    navClickHandler("encounters");
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
