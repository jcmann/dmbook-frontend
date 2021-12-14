import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../redux/displaySlice";

/**
 * The ToolMenu currently only renders the "Add new ___" button. This component also includes some string-processing
 * logic just to make it look better.
 */
export const ToolMenu = (props) => {
  const dispatch = useDispatch();

  const currentContent = useSelector((state) => state.display.currentContent);

  const addNewHandler = (event) => {
    event.preventDefault();
    dispatch(changeCurrentContent({ newContent: currentContent + ":add" }));
  };

  return (
    <section className="centered">
      <button onClick={addNewHandler}>
        Add new {currentContent.slice(0, currentContent.length - 1)}
      </button>
    </section>
  );
};
