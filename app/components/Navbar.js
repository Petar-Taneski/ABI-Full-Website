import { useState } from 'react';
import Link from 'next/link';
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className={styles.navbar_box}>

      <Flex alignItems="center" justifyContent="center" paddingLeft="10%" paddingRight="10%">
        
            <Box className={styles.logo}>
            <img src="/abi_logo.png" alt="Company Logo" width="100%" />
            </Box>
        
        <Spacer />
        
            <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="center">
                <Link href="https://facebook.com" passHref>
                    <Box className={styles.nav_link}>
                    Certificate Programs
                    </Box>
                </Link>

                <Link href="https://facebook.com" passHref>
                    <Box  className={styles.nav_link}>
                    Volunteering Programs
                    </Box>
                </Link>

                <Link href="https://facebook.com" passHref>
                    <Box className={styles.nav_link}>
                    Lectures & Events
                    </Box>
                </Link>

                {/* <Button className={styles.enroll_button}>
                    Enroll
                </Button> */}
            </Box>


            <Box display={{ base: 'block', md: 'none' }}>
            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <MenuButton as={IconButton} icon={<ChevronDownIcon />} variant="ghost" colorScheme="black" onClick={toggleMenu} />
                
                <MenuList bg="white">

                    <MenuItem bg="white">
                        <Link href="https://facebook.com" passHref>
                            <Box className={styles.nav_link}>
                                Certificate Programs
                            </Box>
                        </Link>
                    </MenuItem>

                    <MenuItem bg="white">
                        <Link href="https://facebook.com" passHref>
                            <Box className={styles.nav_link}>
                                Volunteering Programs
                            </Box>
                        </Link>
                    </MenuItem>

                    <MenuItem bg="white">
                        <Link href="https://facebook.com" passHref>
                            <Box className={styles.nav_link}s>
                                Lectures & Events
                            </Box>
                        </Link>
                    </MenuItem>
                    {/* <MenuItem bg="white">
                        <Button
                        colorScheme="black"
                        variant="outline"
                        href="https://facebook.com"
                        fontWeight="bold"
                        size="sm"
                        fontSize="md"
                        >
                        Enroll
                        </Button>
                    </MenuItem> */}
                </MenuList>
            </Menu>
            </Box>
        
      </Flex>
    </Box>
  );
}