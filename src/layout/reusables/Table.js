export const Table = (props) => {
  /**
   * Needs to receive: table structure, data
   * Data might want to come from state
   *
   * When we get the data from the request we might need
   * to verify it "has" the correct # of cols
   */

  return (
    <table className="table">
      <thead>
        {props.data.columns.map((current) => (
          <th scope="col">{current}</th>
        ))}
      </thead>
    </table>
  );
};
