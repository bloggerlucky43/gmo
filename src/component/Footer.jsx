import { Icon, Box, Text, Flex, Heading } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
export default function () {
  return (
    <Box bg="primary.500" mt={{ base: "30vh", md: "10vh" }}>
      {/* translatey */}
      <Flex
        bg="orange.500"
        w={{ base: "80%", md: "70%" }}
        py={6}
        px={4}
        justifySelf="center"
        justify={"space-between"}
        borderRadius={{ md: "lg" }}
        transform={{ base: "translateY(-180px)", md: "translateY(-70px)" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex
          color="whiteAlpha.900"
          w={{ base: "full", md: "30%" }}
          align="center"
          mb={4}
          gap={2}
        >
          <Icon
            as={MdLocationOn}
            borderRadius="md"
            boxSize={16}
            bg="primary.500"
            p={2}
          />
          <Flex direction="column">
            <Heading fontSize={{ base: "md", md: "lg" }}>
              Company Address
            </Heading>
            <Text mt={{ md: "2" }}>
              7 Ajegunle Ewekoro Lagos/Abeokuta Road Ogun state
            </Text>
          </Flex>
        </Flex>

        <Flex
          color="whiteAlpha.900"
          w={{ base: "full", md: "30%" }}
          align="center"
          mb={4}
          gap={2}
        >
          <Icon
            as={FaPhone}
            borderRadius="md"
            boxSize={16}
            bg="primary.500"
            p={2}
          />
          <Flex direction="column">
            <Heading fontSize={{ base: "md", md: "lg" }}>
              Contact Information
            </Heading>
            <Text mt={{ md: "2" }}>08165682612, 08032930304</Text>
          </Flex>
        </Flex>

        <Flex
          color="whiteAlpha.900"
          w={{ base: "full", md: "30%" }}
          align="center"
          mb={4}
          gap={2}
        >
          <Icon
            as={FaEnvelope}
            boxSize={16}
            bg="primary.500"
            borderRadius="md"
            p={2}
          />
          <Flex direction="column">
            <Heading fontSize={{ base: "md", md: "lg" }}>Contact Email</Heading>
            <Text mt={{ md: "2" }}>oshiektech4@gmail.com</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* footer details */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justifySelf="center"
        color="whiteAlpha.900"
        w={{ base: "90%", md: "70%" }}
      >
        <Flex
          mb={{ md: "10vh" }}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Flex w={{ base: "full", md: "30%" }} direction="column">
            <Text>
              GMO is a trusted service provider specializing in industrial
              electrical and mechanical installations, resourcing and
              outsourcing, labor recruiting, rental services, and industrial
              cleaning. We also deliver tailored solutions in vegetation
              management for mining areas, water sanitation, and landscaping —
              ensuring efficiency, safety, and sustainability for every project.
            </Text>
            <Flex gap={4} mt={4}>
              <Icon
                as={FaFacebook}
                color="primary.900"
                _hover={{ color: "orange.500" }}
                boxSize={6}
              />
              <Icon
                as={FaInstagram}
                color="primary.900"
                _hover={{ color: "orange.500" }}
                boxSize={6}
              />
              <Icon
                as={FaLinkedin}
                color="primary.900"
                _hover={{ color: "orange.500" }}
                boxSize={6}
              />
              <Icon
                as={FaTwitter}
                color="primary.900"
                _hover={{ color: "orange.500" }}
                boxSize={6}
              />
            </Flex>
          </Flex>

          {/* useful links */}
          <Flex
            direction="column"
            cursor="pointer"
            mt={{ base: "8vh", md: "0" }}
            w={{ md: "30%" }}
          >
            <Flex
              borderBottom="solid 2px"
              borderColor="orange.500"
              pb={8}
              mb={8}
            >
              <Heading>Useful Links</Heading>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaLongArrowAltRight} />
              <Text>About Us</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaLongArrowAltRight} />
              <Text>Our Team</Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            mt={{ base: "8vh", md: "0" }}
            w={{ md: "30%" }}
          >
            <Flex
              pb={8}
              mb={8}
              borderBottom="solid 2px"
              borderColor="orange.500"
            >
              <Heading>Contact Info</Heading>
            </Flex>
            <Flex gap={2}>
              <Icon as={MdLocationOn} boxSize={5} />
              <Text>No 7, Ajegunle Ewekoro Lagos/Abeokuta Road Ogun State</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaPhone} boxSize={5} />
              <Text>08165682612,08032930304</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaEnvelope} boxSize={5} />
              <Text>oshiektech4@gmail.com</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bg="primary.400"
        cursor={"pointer"}
        color={"whiteAlpha.900"}
        justify="center"
        py={{ base: "3", md: "6" }}
        mt={{ base: "8vh", md: "0" }}
      >
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          textAlign={{ base: "center" }}
          fontWeight="semibold"
        >
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "orange" }}>Gmotechnigltd</span>. Designed by
          <span style={{ color: "orange" }}> Altechdev</span>
        </Text>
      </Flex>
    </Box>
  );
}
