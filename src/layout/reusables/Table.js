import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { useSelector } from "react-redux";

// TODO figure out table generation bug where extra tds are created (might be 2x?)

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
  const dataWithActions = () => {
    if (props.data !== null) {
      return props.data.map((current) => {
        return {
          actions: (
            <div className="editAndDelete">
              <EditIcon itemID={current.id} resourceType={currentContent} />
              <DeleteIcon itemID={current.id} resourceType={currentContent} />
            </div>
          ),
          ...current,
        };
      });
    } else {
      return [];
    }
  };

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
          <tr>
            <td colSpan={props.tableStructure.columns.length}>
              Results could not be retrieved.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
