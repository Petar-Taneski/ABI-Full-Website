'use client'
import { useQuery } from 'react-query';
import { Text, Flex } from '@chakra-ui/react';
import { Cards } from './program_cards_components/Cards';
import { db } from '../../firebase';


const ProgramsSection = () => {
  const { data: programs, isLoading } = useQuery('programs', async () => {
    const snapshot = await db.collection('programs').get();
    return snapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
  });

  return (
    <>
      <Text as="h2" fontSize="1.5rem" fontWeight="bold" textAlign="center" py={4} padding="20px">
        Most popular programs
      </Text>

      {isLoading ? (
        <Text as="h2" fontSize="1.5rem" fontWeight="bold" textAlign="center" py={4} padding="20px">
          Please wait...
        </Text>
      ) : (
        <Flex direction="row" flexWrap="wrap" justifyContent="space-around">
          <Cards programs={programs} />
        </Flex>
      )}
    </>
  );
};

export default ProgramsSection;
