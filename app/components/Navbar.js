'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, Stack } from '@chakra-ui/react';
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
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="center" paddingLeft='20px'>
          <Stack direction="row" spacing={4}>
            <NavLink href="https://www.youtube.com/watch?v=dqw4w9wgxcq">Certificate Programs</NavLink>
            <NavLink href="https://www.youtube.com/watch?v=dqw4w9wgxcq">Volunteering Programs</NavLink>
            <NavLink href="https://www.youtube.com/watch?v=dqw4w9wgxcq">Lectures & Events</NavLink>
            {/* <Button className={styles.enroll_button} href="https://www.youtube.com/watch?v=dqw4w9wgxcq>
                    Enroll
            </Button> */}
          </Stack>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
            <MenuButton as={IconButton} icon={<ChevronDownIcon />} variant="ghost" colorScheme="black" onClick={toggleMenu} />
            <MenuList bg="white">
              <MenuItem bg="white">
                <NavLink href="https://www.youtube.com/watch?v=dqw4w9wgxcq">Certificate Programs</NavLink>
              </MenuItem>
              <MenuItem bg="white">
                <NavLink href="https://www.youtube.com/watch?v=dqw4w9wgxcq">Volunteering Programs</NavLink>
              </MenuItem>
              <MenuItem bg="white">
                <NavLink href="https://www.youtube.com/watch?v=dqw4w9wgxcq">Lectures & Events</NavLink>
              </MenuItem>
              <MenuItem bg="white">
                <Button
                colorScheme="black"
                variant="outline"
                href="https://www.youtube.com/watch?v=dqw4w9wgxcq"
                fontWeight="bold"
                size="sm"
                fontSize="md"
                >
                  Enroll
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}

function NavLink({ href, children }) {
    return (
      <Link href={href} passHref>
        <span className={styles.nav_link}>
          {children}
        </span>
      </Link>
    );
  }