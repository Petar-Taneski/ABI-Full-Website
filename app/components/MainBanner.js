
import React from 'react';
import styles from '../styles/main_banner.module.css'
import { Box, Text} from '@chakra-ui/react';

const Programs = () => {
  return (
    <section className={styles.boxContainer}>
        <Box
          p={8}
          bg="lightgray"
          color="#0070f3"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          minHeight="300px"
        >

          <Text  fontSize="0.8rem"  maxWidth="33%" fontWeight="bold">
            START A CAREER IN GOVERNMENT, BUSINESS OR POLITICS
          </Text>
          <Text fontSize="2.5rem" fontWeight="bold" lineHeight="1.5" mt={4} maxWidth="66%" color="black">
            Get digital credentials and drive your career forward.
          </Text>
        </Box>
      </section>
  );
};

export default Programs;