import { Box, Flex, Text } from "@chakra-ui/react";
import interior from "../assets/interior.jpg";

const AboutComponent = () => {
  return (
    <Box mt="8vh">
      <Box
        w="100%"
        cursor="pointer"
        h={{ base: "350px" }}
        bgImage={`url(${interior})`}
        bgSize={"cover"}
        bgPos="center"
        overflow="hidden"
        position={"relative"}
      >
        <Box
          postion="relative"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="primary.700"
          opacity={0.8}
        >
          <Flex
            position="relative"
            zIndex={1}
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="center"
            textAlign="center"
            px={4}
            mt={4}
          >
            <Text
              fontSize={{ base: "lg", md: "3xl" }}
              fontWeight="bold"
              color="white"
              mb={4}
            >
              Driven by Excellence, Built on Trust
            </Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              color="white"
              mb={6}
              maxW="600px"
            >
              Our journey is defined by precision, safety, and client
              satisfaction. From industrial installations to workforce
              resourcing, sanitation, and landscaping, we go beyond services to
              build long-term partnerships that power progress
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutComponent;
