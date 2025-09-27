import { Box, Flex, Text, Button } from "@chakra-ui/react";
import bgImage from "../assets/eng.jpg";

export default function CallToAction() {
  return (
    <Box
      w="100%"
      h={{ base: "250px", md: "300px" }}
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
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
        // bg="rgba(0, 37, 64, 0.7)"
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={1}
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        px={4}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="white"
          mb={4}
        >
          Need Skilled Labour or Equipment Fast?
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="white" mb={6}>
          Get in touch with us today and let’s make your project a success
        </Text>
        <Button
          size="lg"
          bg="orange.400"
          color="white"
          _hover={{ bg: "orange.500" }}
        >
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
}
