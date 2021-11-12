import { Table } from "../../reusables/Table";

export const Encounters = () => {
  const tableCols = ["", "Title", "Difficulty", "Description"];
  const tableData = {
    columns: tableCols,
    type: "encounters",
  };

  const mockData = [
    {
      title: "Encounter 1",
      difficulty: "10",
      description: "Here is a description! whoa!",
    },
    {
      title: "Encounter 2",
      difficulty: "100",
      description:
        "Here is a loooooooooooooooooooooooooooooooooooong description! whoa!",
    },
    {
      title: "Encounter 3",
      difficulty: "50",
      description: "Here is a description! whoa!",
    },
  ];

  return (
    <>
      <h2>Encounters</h2>
      <Table
        tableStructure={tableData}
        data={mockData}
        resourceType="encounters"
      />
    </>
  );
};
