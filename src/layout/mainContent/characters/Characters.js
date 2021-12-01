import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../reusables/Table";

export const Characters = () => {
  const allData = useSelector((state) => state.data.characters);

  const tableCols = [
    "",
    "ID",
    "Name",
    "Level",
    "Class",
    "Race",
    "Str",
    "Dex",
    "Con",
    "Int",
    "Wis",
    "Cha",
  ];
  const tableData = {
    columns: tableCols,
    type: "characters",
  };

  return (
    <>
      <h2>Characters</h2>
      <Table
        tableStructure={tableData}
        data={allData}
        resourceType="characters"
      />
    </>
  );
};
