import { Box, Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import gmologo from "../assets/gmologo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const MotionBox = motion.create(Box);

/* Single source of truth - the desktop bar and the mobile panel both render
 * from this, so a link can never exist in one and not the other. */
const NAV_LINKS = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "PROJECTS", to: "/projects" },
  { label: "EQUIPMENT", to: "/equipment" },
  { label: "CONTACT", to: "/contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      w="100%" /* not 100vw - that overflows horizontally when a scrollbar exists */
      zIndex={20}
      bg="white"
      boxShadow="md"
    >
      <Flex
        w={{ base: "92%", xl: "85%" }}
        mx="auto"
        py={3}
        align="center"
        justify="space-between"
        gap={4}
      >
        {/* Logo */}
        <Box asChild flexShrink={0}>
          <RouterLink to="/" onClick={closeMenu} aria-label="GMO Technic - home">
            <Image
              src={gmologo}
              alt="GMO Technic Ltd"
              w={{ base: "38px", md: "50px" }}
              h="auto"
              objectFit="contain"
            />
          </RouterLink>
        </Box>

        {/* Desktop links. Shown from lg up - seven links plus a button will not
            fit at md. */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          align="center"
          gap={{ lg: 5, xl: 7 }}
        >
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = pathname === to;
            return (
              <Box asChild key={to}>
                <RouterLink to={to}>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    color={isActive ? "primary.500" : "gray.700"}
                    borderBottom="2px solid"
                    borderColor={isActive ? "orange.500" : "transparent"}
                    pb={1}
                    transition="color 0.2s, border-color 0.2s"
                    _hover={{ color: "primary.500", borderColor: "orange.500" }}
                  >
                    {label}
                  </Text>
                </RouterLink>
              </Box>
            );
          })}
        </Flex>

        {/* Desktop CTA */}
        <Button
          display={{ base: "none", lg: "inline-flex" }}
          size="sm"
          bg="orange.500"
          color="white"
          fontSize="xs"
          fontWeight="bold"
          flexShrink={0}
          _hover={{ bg: "orange.600" }}
          onClick={() => navigate("/quote")}
        >
          GET A QUOTE
        </Button>

        {/* Mobile toggle */}
        <Icon
          as={isMenuOpen ? FaTimes : FaBars}
          display={{ base: "block", lg: "none" }}
          boxSize={5}
          color="primary.500"
          cursor="pointer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        />
      </Flex>

      {/* Mobile panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionBox
            display={{ base: "block", lg: "none" }}
            overflow="hidden"
            borderTop="1px solid"
            borderColor="gray.200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Flex direction="column" w="92%" mx="auto" py={4} gap={1}>
              {NAV_LINKS.map(({ label, to }) => {
                const isActive = pathname === to;
                return (
                  <Box asChild key={to}>
                    {/* closeMenu on click - the old menu stayed open after
                        navigating, leaving the panel covering the page. */}
                    <RouterLink to={to} onClick={closeMenu}>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        py={2.5}
                        px={2}
                        rounded="md"
                        color={isActive ? "primary.500" : "gray.700"}
                        bg={isActive ? "gray.100" : "transparent"}
                        borderLeft="3px solid"
                        borderColor={isActive ? "orange.500" : "transparent"}
                        _hover={{ color: "primary.500", bg: "gray.50" }}
                      >
                        {label}
                      </Text>
                    </RouterLink>
                  </Box>
                );
              })}

              <Button
                mt={3}
                size="md"
                bg="orange.500"
                color="white"
                fontSize="sm"
                fontWeight="bold"
                _hover={{ bg: "orange.600" }}
                onClick={() => {
                  closeMenu();
                  navigate("/quote");
                }}
              >
                GET A QUOTE
              </Button>
            </Flex>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
