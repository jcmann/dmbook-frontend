import { useSelector, useDispatch } from "react-redux";
import { changeCurrentContent } from "../redux/displaySlice";

export const LoggedInMenu = () => {
  const dispatch = useDispatch();

  const navClickHandler = (newContentProvided) => {
    dispatch(changeCurrentContent({ newContent: newContentProvided }));
  };

  const homeClickHandler = (event) => {
    event.preventDefault();
    console.log("Handler");
    // navClickHandler("home");
    dispatch(changeCurrentContent({ newContent: "home" }));
  };
  const charactersClickHandler = (event) => {
    event.preventDefault();
    console.log("Handler");
    // navClickHandler("characters");
    dispatch(changeCurrentContent({ newContent: "characters" }));
  };
  const encountersClickHandler = (event) => {
    event.preventDefault();
    console.log("Handler");
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
    </ul>
  );
};
