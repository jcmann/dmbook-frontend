import { Table } from '../../reusables/Table';

export const Characters = () => {
  const tableCols = ['', 'ID', 'Name', 'Level', 'Class', 'Race'];
  const tableData = {
    columns: tableCols,
    type: 'characters',
  };

  const mockCharData = [
    {
      id: 1,
      name: 'Professor Rigby',
      level: 15,
      class: 'Bard',
      race: 'Tabaxi',
    },
    {
      id: 2,
      name: 'Tanqueray Togstad',
      level: 5,
      class: 'Rogue',
      race: 'Halfling',
    },
    {
      id: 3,
      name: 'Mozzy Peck',
      level: 8,
      class: 'Paladin',
      race: 'Half-Elf',
    },
  ];

  return (
    <>
      <h2>Characters</h2>
      <Table
        tableStructure={tableData}
        data={mockCharData}
        resourceType="characters"
      />
    </>
  );
};
