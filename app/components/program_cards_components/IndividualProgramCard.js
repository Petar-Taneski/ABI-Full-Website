'use client'
import React from 'react';
import cardstyles from '../../styles/cards.module.css';
import { Box, Card, CardBody, CardFooter, Divider, Flex, Heading, Text, Stack } from '@chakra-ui/react';

export const IndividualProgramCard = ({ individualProgram }) => {
  return (
    <Box className={cardstyles.cardContainer}>
      <Card maxW="sm" className={cardstyles.cards}>
        <CardBody>
          <img
            src={individualProgram.bg_photo_path}
            alt="Green double couch with wooden legs"
            style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{individualProgram.title}</Heading>
            <Text>{individualProgram.description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Box maxWidth="50%" alignItems="center">
              <img src={individualProgram.edu_logo_path} alt="Logo" />
            </Box>
            <Text color="blue.600" fontSize="2xl">
              {individualProgram.price}
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
};
