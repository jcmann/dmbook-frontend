import { Table } from '../../reusables/Table';

export const Characters = () => {
  const tableCols = ['Name', 'Level', 'Class', 'Race'];
  const tableData = {
    columns: tableCols,
    type: 'characters',
  };

  return (
    <>
      <h2>Characters</h2>
      <Table data={tableData} />
    </>
  );
};
