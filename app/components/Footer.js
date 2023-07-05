'use client'
import React from 'react';
import { Box, Text, Flex,Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, StylesProvider } from '@chakra-ui/react';
import styles from '../styles/footer.module.css'
const Footer = () => {
    return (
        <section style={{ backgroundColor: '#2c2c2c' }}>
        
            <Flex className={styles.footerFlexContainer1} >

                <Box maxWidth="25%" display="flex" alignItems="center" paddingTop="50px">
                    <img src="./abi_logo.png" alt="Logo" />
                </Box>

                <Box>
                    <Text color="lightgray" fontSize="1.5rem" marginBottom="30px" marginTop= "60px">
                        Alumni
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="0.9rem" mt={2}>
                        Community
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        How it works
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        Campus
                    </Text>
                </Box>
                <Box>
                    <Text color="lightgray" fontSize="1.5rem" marginBottom="30px" marginTop= "60px">
                        Educators
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="0.9rem" mt={2}>
                        Apply as an educator
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        Guest speaker
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        Educators
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        Event agenda
                    </Text>
                </Box>

                <Box>
                    <Text color="lightgray" fontSize="1.5rem" marginBottom="30px" marginTop= "60px">
                        The institute
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="0.9rem" mt={2}>
                        Blog
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        Press
                    </Text>
                    <Text className={styles.footerText} color="white" fontSize="1rem">
                        Contact us
                    </Text>
                </Box>

                

                
            </Flex>

            <Flex className={styles.footerFlexContainer2} >
                <Text className={styles.copyright}>
                    © Copyright 2023 American Business Institute
                </Text>
                <Flex className={styles.footerFlexContainer3}>
                    <Text padding="10px">
                        Sitemap
                    </Text>
                    <Text padding="10px">
                        Terms
                    </Text>
                    <Text padding="10px">
                        Privacy Policy
                    </Text>
                </Flex>
            </Flex>
        </section>
    );
};

export default Footer;