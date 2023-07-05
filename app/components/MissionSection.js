'use client'
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import SectionStyles from '../styles/main_banner.module.css';
import styles from '../styles/mission_section.module.css';

const MissionSection = () => {
  return (
    <section className={SectionStyles.boxContainer}>
      <Box marginTop="30px" bg="lightgray">
        <Box
          p={8}
          bg="lightgray"
          color="#0070f3"
          textAlign="center"
          minHeight="auto"
          className={styles.sectionBox}
        >
          <Text fontSize="0.8rem" maxWidth="33%" fontWeight="bold">
            Developing foundations for a smarter government
          </Text>
          <Text fontSize="2.5rem" fontWeight="bold" lineHeight="1.5" mt={4} maxWidth="66%" color="black">
            What is our core mission?
          </Text>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          className={styles.itemBox}
          >

          <Box className={styles.card} marginBottom="100px">
            <Text className={styles.cardTitle}>
              1. Spread awareness about moral virtues and values of public service and governance.
            </Text>
              <br/>
            <Text className={styles.cardContent}>
              By sharing stories, educating and informing the public, our objective is to bring
              consciousness to the meaning of public service and its impact on society.
              <br/>
              <br/>
              We want to inspire a virtuous view of public leadership and instill a sense of
              responsibility in current and future leaders of society.
            </Text>
          </Box>

          <Box className={styles.card} marginBottom="100px">
            <Text className={styles.cardTitle} color="#0070f3" fontWeight="bold">
              How do we meet this goal?
            </Text>
              <br/>
              <Box className={styles.cardContent}>

                <Flex alignItems="center">
                  <StarIcon boxSize={10} color="black" />
                  <Text className={styles.itemText}>
                    By organizing keynote events with honorable guest speakers who share their stories.
                  </Text>
                </Flex>
                <br/>
                <Flex alignItems="center">
                  <StarIcon boxSize={10} color="black" />
                  <Text className={styles.itemText}>
                    Holding history lectures on the development of democracy & capitalism.
                  </Text>
                </Flex>
                <br/>
                <Flex alignItems="center">
                  <StarIcon boxSize={10} color="black" />
                  <Text className={styles.itemText}>
                    Organizing projects and workshops where people can volonteer for public service.
                  </Text>
                </Flex>

            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          className={styles.itemBox}
          >

          <Box className={styles.card}>
            <Text className={styles.cardTitle}>
              2. Providing education on the skills needed to build a more efficient goverment
            </Text>
              <br/>
            <Text className={styles.cardContent}>
              We believe that an efficient government can be build only by the people that have the required skills to plan, recruit, organize and monitor the progress and development of its projects and programs using the lastest and most advance project managment frameworks.
            </Text>
          </Box>

          <Box className={styles.card}>
            <Text className={styles.cardTitle} color="#0070f3" fontWeight="bold">
              How do we meet this goal?
            </Text>
              <br/>
              <Box className={styles.cardContent}>

                <Flex alignItems="center">
                  <StarIcon boxSize={10} color="black" />
                  <Text className={styles.itemText}>
                    By developing and providing access to advance online certifications and education programs.
                  </Text>
                </Flex>
                <br/>
                <Flex alignItems="center">
                  <StarIcon boxSize={10} color="black" />
                  <Text className={styles.itemText}>
                   By providing access to specialized training in the fields of political science, management, international relations, leadership, campaigning, public service, public speaking, economics and law.
                  </Text>
                </Flex>
                <br/>
                <Flex alignItems="center">
                  <StarIcon boxSize={10} color="black" />
                  <Text className={styles.itemText} >
                   By developing a hands-on work experience programs where our alumni can gain the experience and performance assesment needed to improve their skills.
                  </Text>
                </Flex>

            </Box>
          </Box>
        </Box>
        
      </Box>
    </section>
  );
};

export default MissionSection;
