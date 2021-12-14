import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../redux/displaySlice";
// import Button from './reusables/Button';

export const ToolMenu = (props) => {
  const dispatch = useDispatch();

  const currentContent = useSelector((state) => state.display.currentContent);
  const uppercaseCurrent =
    currentContent[0].toUpperCase() + currentContent.slice(1);
  // const addNewLabel = uppercaseCurrent.slice(0, uppercaseCurrent.length - 1);

  const addNewHandler = (event) => {
    event.preventDefault();
    dispatch(changeCurrentContent({ newContent: currentContent + ":add" }));
  };

  return (
    <section className="centered">
      <button onClick={addNewHandler}>
        Add new {currentContent.slice(0, currentContent.length - 1)}
      </button>
      {/* <a>
        View all {currentContent[0].toUpperCase() + currentContent.slice(1)}
      </a> */}
    </section>
  );
};
