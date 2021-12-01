import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../reusables/Table";

export const Encounters = () => {
  const encountersData = useSelector((state) => state.data.encounters);

  const tableCols = ["", "ID", "Title", "Difficulty", "Description"];
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
