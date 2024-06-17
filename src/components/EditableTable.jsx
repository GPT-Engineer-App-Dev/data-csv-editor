import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Button, Input } from '@chakra-ui/react';
import { FaTrash, FaPlus } from 'react-icons/fa';

const EditableTable = ({ data, setData }) => {
  const handleInputChange = (e, rowIndex, columnName) => {
    const newData = [...data];
    newData[rowIndex][columnName] = e.target.value;
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = Object.keys(data[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (rowIndex) => {
    const newData = data.filter((_, index) => index !== rowIndex);
    setData(newData);
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            {Object.keys(data[0]).map((columnName) => (
              <Th key={columnName}>{columnName}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {Object.keys(row).map((columnName) => (
                <Td key={columnName}>
                  <Input
                    value={row[columnName]}
                    onChange={(e) => handleInputChange(e, rowIndex, columnName)}
                  />
                </Td>
              ))}
              <Td>
                <IconButton
                  aria-label="Delete row"
                  icon={<FaTrash />}
                  onClick={() => handleRemoveRow(rowIndex)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button leftIcon={<FaPlus />} onClick={handleAddRow} colorScheme="green" mt={4}>
        Add Row
      </Button>
    </>
  );
};

export default EditableTable;