import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import bgImage from "../assets/building.jpg";
import { FaCalendar, FaHandshake, FaTasks, FaUsers } from "react-icons/fa";
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
                10+
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
                50+
              </Text>
              <Icon
                as={FaUsers}
                boxSize={12}
                color="orange.500"
                ml={{ base: "30vw", md: "0" }}
              />
            </Flex>
            <Text color="whiteAlpha.900">Skilled Workers</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
