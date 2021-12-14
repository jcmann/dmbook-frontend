import { useSelector } from "react-redux";
import { Table } from "../../reusables/Table";

/**
 * This component contains the listing of all characters belonging to the currently signed in user.
 */
export const Characters = () => {
  const allData = useSelector((state) => state.data.characters);

  const tableCols = [
    "", // The first column needs to be empty for the edit/delete
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
