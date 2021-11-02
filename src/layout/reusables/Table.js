import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

export const Table = (props) => {
  /**
   * Needs to receive: table structure, data
   * Data might want to come from state
   *
   * When we get the data from the request we might need
   * to verify it "has" the correct # of cols
   */

  const dataWithActions = props.data.map((current) => {
    return {
      actions: (
        <div className="editAndDelete">
          <EditIcon itemID={current.id} resourceType={props.resourceType} />
          <DeleteIcon />
        </div>
      ),
      ...current,
    };
  });

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
        {props.data &&
          dataWithActions.map((current) => {
            return (
              <tr>
                {Object.entries(current).map((currProperty) => {
                  return <td>{currProperty[1]}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
