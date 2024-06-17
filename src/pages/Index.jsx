import React, { useState } from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import CSVUploader from '../components/CSVUploader';
import EditableTable from '../components/EditableTable';
import CSVDownloader from '../components/CSVDownloader';

const Index = () => {
  const [data, setData] = useState(null);

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">CSV Upload, Edit, and Download Tool</Heading>
        {!data ? (
          <CSVUploader onUpload={setData} />
        ) : (
          <>
            <EditableTable data={data} setData={setData} />
            <CSVDownloader data={data} />
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;