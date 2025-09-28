import {
  Box,
  Flex,
  Text,
  Image,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import gmologo from "../assets/gmologo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionFlex = motion.create(Flex);
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      direction={isMobile && "column"}
      zIndex={10}
      justify="space-around"
      align="center"
      p={4}
      boxSizing="border-box"
      bg="white"
      boxShadow="md"
      cursor="pointer"
    >
      <Flex
        p={2}
        align="center"
        w={isMobile && "100vw"}
        overflowX="hidden"
        justify="space-between"
      >
        <Box w={{ base: "35px", md: "50px" }} h="auto">
          <Image src={gmologo} alt="gmologo" objectFit="contain" />
        </Box>

        {!isMenuOpen && isMobile ? (
          <Icon
            as={FaBars}
            boxSize={5}
            color="primary.500"
            onClick={toggleMenu}
          />
        ) : (
          isMobile && (
            <Icon
              as={FaTimes}
              boxSize={5}
              color="primary.500"
              onClick={() => setIsMenuOpen(false)}
            />
          )
        )}
      </Flex>

      <Flex
        gap={8}
        color="gray.700"
        display={{ base: "none", md: "flex" }}
        fontWeight={"bold"}
      >
        {["HOME", "ABOUT US", "SERVICES", "CONTACT", "PAGES"].map((item) => (
          <Text
            key={item}
            color="gray.700"
            fontWeight={"bold"}
            _hover={{ color: "primary.500" }}
          >
            {item}
          </Text>
        ))}
      </Flex>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <MotionFlex
            w="full"
            overflow="hidden"
            p={2}
            mt={4}
            color="gray.950"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              {["HOME", "ABOUT US", "SERVICES", "CONTACT", "PAGES"].map(
                (item) => (
                  <Text
                    key={item}
                    color="gray.700"
                    fontWeight={"bold"}
                    mt={4}
                    _hover={{ color: "primary.500" }}
                  >
                    {item}
                  </Text>
                )
              )}
            </Flex>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Flex>
  );
}
