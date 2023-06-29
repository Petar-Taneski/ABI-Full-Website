import React from 'react';
import cardstyles from '../styles/cards.module.css'
import { Box, Text, Flex,Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react';

const Programs = () => {
  return (
  <section>
          
    <Text as="h2" fontSize="1.5rem" fontWeight="bold" textAlign="center" py={4} padding="20px">
      Most popular programs
    </Text>
    
      <Flex direction="row" flexWrap="wrap" justifyContent='space-around' >

        <Box className={cardstyles.cardContainer}>
          <Card maxW="sm" className={cardstyles.cards}>
          <CardBody>
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Flex w='full' justifyContent="space-between" alignItems="center">
                <Box maxWidth="50%" alignItems="center">
                      <img src="./abi_logo.png" alt="Logo" />
                </Box>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>

        <Box className={cardstyles.cardContainer}>
          <Card maxW="sm" className={cardstyles.cards}>
          <CardBody>
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Flex w='full' justifyContent="space-between" alignItems="center">
                <Box maxWidth="50%" alignItems="center">
                      <img src="./abi_logo.png" alt="Logo" />
                </Box>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>

        <Box className={cardstyles.cardContainer}>
          <Card maxW="sm" className={cardstyles.cards}>
          <CardBody>
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Flex w='full' justifyContent="space-between" alignItems="center">
                <Box maxWidth="50%" alignItems="center">
                      <img src="./abi_logo.png" alt="Logo" />
                </Box>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>

      </Flex> 

      <Flex direction="row" flexWrap="wrap" justifyContent='space-around'>

        <Box className={cardstyles.cardContainer}>
          <Card maxW='sm'>
            <CardBody>
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
          <Divider />
            <CardFooter>
              <Flex w='full' justifyContent="space-between" alignItems="center">
                <Box maxWidth="50%" alignItems="center">
                      <img src="./abi_logo.png" alt="Logo" />
                </Box>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>

        <Box className={cardstyles.cardContainer}>
          <Card maxW='sm'>
            <CardBody>
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Flex w='full' justifyContent="space-between" alignItems="center">
                <Box maxWidth="50%" alignItems="center">
                      <img src="./abi_logo.png" alt="Logo" />
                </Box>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>

        <Box className={cardstyles.cardContainer}>
          <Card maxW='sm'>
            <CardBody>
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                style={{ width: '100%', height: 'auto', borderRadius: '0.375rem 0.375rem 0 0' }}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Flex w='full' justifyContent="space-between" alignItems="center">
                <Box maxWidth="50%" alignItems="center">
                      <img src="./abi_logo.png" alt="Logo" />
                </Box>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>

      </Flex> 
    
  </section>
  );
};

export default Programs;