import { Table } from '../../reusables/Table';

export const Encounters = () => {
  const tableCols = ['Title', 'Difficulty', 'Description'];
  const tableData = {
    columns: tableCols,
    type: 'encounters',
  };

  return (
    <>
      <h2>Encounters</h2>
      <Table data={tableData} />
    </>
  );
};
