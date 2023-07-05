'use client'
import { Text, Flex } from '@chakra-ui/react';
import { Cards } from './program_cards_components/Cards';
import { db } from '../../firebase';

export const revalidate=0

export async function getServerSideProps() {
  const snapshot = await db.collection('programs').get();
  const programs = snapshot.docs.map((doc) => ({
    ID: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      programs,
    },
  };
}

const ProgramsSection = ({ programs }) => {
  return (
    <>
      <Text as="h2" fontSize="1.5rem" fontWeight="bold" textAlign="center" py={4} padding="20px">
        Most popular programs
      </Text>

      {programs ? (
        <Flex direction="row" flexWrap="wrap" justifyContent="space-around">
          <Cards programs={programs} />
        </Flex>
      ) : (
        <Text as="h2" fontSize="1.5rem" fontWeight="bold" textAlign="center" py={4} padding="20px">
          Loading...
        </Text>
      )}
    </>
  );
};

export default ProgramsSection;
