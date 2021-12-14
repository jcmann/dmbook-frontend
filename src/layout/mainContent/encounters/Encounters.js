import { useSelector } from "react-redux";
import { Table } from "../../reusables/Table";

/**
 * This component contains the listing of all characters belonging to the currently signed in user.
 */
export const Encounters = () => {
  const encountersData = useSelector((state) => state.data.encounters);

  const tableCols = ["", "ID", "Title", "Difficulty", "Description"]; // the first column must be empty for the edit/delete
  const tableData = {
    columns: tableCols,
    type: "encounters",
  };

  return (
    <>
      <h2>Encounters</h2>
      <Table
        tableStructure={tableData}
        data={encountersData}
        resourceType="encounters"
      />
    </>
  );
};
