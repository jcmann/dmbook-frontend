import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { useSelector } from "react-redux";

export const Table = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);
  const currentData = useSelector((state) => state.data.resources);
  /**
   * Needs to receive: table structure, data
   * Data might want to come from state
   *
   * When we get the data from the request we might need
   * to verify it "has" the correct # of cols
   */

  /*
        Concept: rework this to instead completely pull from state instead of props
   */

  const dataWithActions = () => {
    if (currentData !== null) {
      return currentData.map((current) => {
        return {
          actions: (
            <div className="editAndDelete">
              <EditIcon itemID={current.id} resourceType={currentContent} />
              <DeleteIcon />
            </div>
          ),
          ...current,
        };
      });
    } else {
      return [];
    }
  };

  // TODO: edit & delete should be replaced with icons
  // TODO: edit & delete icons will need a resourcetype sort of prop, probably pulled from display state

  return (
    <table className="table">
      <thead>
        <tr>
          {props.tableStructure.columns.map((current) => (
            <th scope="col">{current}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data ? (
          dataWithActions().map((current) => {
            return (
              <tr>
                {Object.entries(current).map((currProperty) => {
                  return <td>{currProperty[1]}</td>;
                })}
              </tr>
            );
          })
        ) : (
          <td colspan={props.tableStructure.columns.length}>
            Results could not be retrieved.
          </td>
        )}
      </tbody>
    </table>
  );
};
