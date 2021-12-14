import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

/**
 * The Table component dynamically builds a table based on the props provided from its parent component.
 * It requires a few props to work:
 *  - resourceType --> the type of data being displayed (encounters, characters) to pass to the edit/delete icons
 *  - data --> the actual array of objects to be split into rows/columns
 *  - tableStructure --> an array of columns to create
 */
export const Table = (props) => {
  // This builds the actions elements (edit/delete)
  const dataWithActions = () => {
    if (props.data !== null) {
      return props.data.map((current) => {
        return {
          actions: (
            <div className="editAndDelete">
              <EditIcon itemID={current.id} resourceType={props.resourceType} />
              <DeleteIcon
                itemID={current.id}
                resourceType={props.resourceType}
              />
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
