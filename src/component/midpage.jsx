import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import bgImage from "../assets/building.webp";
import { FaCalendar, FaHandshake, FaTasks, FaUsers } from "react-icons/fa";
import { TEAM_SIZE, yearsInIndustryLabel } from "../config/contact";

/* TODO(owner): "100+ Satisfied Clients" and "250+ Projects" still have no source
 * in the company profile document. Confirm both - or drop the ones that cannot be
 * stood behind. A visitor cannot check them, but a client who has worked with the
 * company can.
 *
 * The headcount tile is settled: it publishes the profile document's 17 permanent
 * personnel as the core team, rather than the "50+ Skilled Workers" it used to
 * claim. See TEAM_SIZE in src/config/contact.js. */
export default function MidPage() {
  return (
    <Box
      w="100%"
      h={{ base: "110vh", md: "300px" }}
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
      data-aos="slide-up"
    >
      {/* Blue overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="primary.700"
        opacity={0.9}
      />

      <Flex
        position="relative"
        zIndex={1}
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        px={4}
      >
        <Flex direction={{ base: "column", md: "row", lg: "row" }} gap={10}>
          <Flex
            direction="column"
            px={6}
            py={4}
            data-aos="fade-up"
            borderLeft="solid 2px"
            borderColor="orange.500"
          >
            <Flex align="center" gap={10}>
              <Text
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                color="whiteAlpha.900"
                fontWeight="bold"
              >
                100+
              </Text>
              <Icon
                as={FaHandshake}
                boxSize={12}
                color="orange.500"
                ml={{ base: "25vw", md: "0" }}
              />
            </Flex>
            <Text color="whiteAlpha.900">Satisfied Clients</Text>
          </Flex>

          <Flex
            direction="column"
            px={6}
            py={4}
            data-aos="fade-up"
            borderLeft="solid 2px"
            borderColor="orange.500"
          >
            <Flex align="center" gap={10}>
              <Text
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                color="whiteAlpha.900"
                fontWeight="bold"
              >
                {yearsInIndustryLabel()}
              </Text>
              <Icon
                as={FaCalendar}
                boxSize={12}
                color="orange.500"
                ml={{ base: "30vw", md: "0" }}
              />
            </Flex>
            <Text color="whiteAlpha.900">Years Experience</Text>
          </Flex>

          <Flex
            direction="column"
            px={6}
            py={4}
            data-aos="fade-up"
            borderLeft="solid 2px"
            borderColor="orange.500"
          >
            <Flex align="center" gap={10}>
              <Text
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                color="whiteAlpha.900"
                fontWeight="bold"
              >
                250+
              </Text>
              <Icon
                as={FaTasks}
                boxSize={12}
                color="orange.500"
                ml={{ base: "25vw", md: "0" }}
              />
            </Flex>
            <Text color="whiteAlpha.900">Projects</Text>
          </Flex>

          <Flex
            direction="column"
            px={6}
            py={4}
            data-aos="fade-up"
            borderLeft="solid 2px"
            borderColor="orange.500"
          >
            <Flex align="center" gap={10}>
              <Text
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                color="whiteAlpha.900"
                fontWeight="bold"
              >
                {TEAM_SIZE}
              </Text>
              <Icon
                as={FaUsers}
                boxSize={12}
                color="orange.500"
                ml={{ base: "30vw", md: "0" }}
              />
            </Flex>
            <Text color="whiteAlpha.900">Core Personnel</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
