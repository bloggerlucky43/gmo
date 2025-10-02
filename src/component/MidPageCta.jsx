import { Box, Flex, Text, Button } from "@chakra-ui/react";
import bgImage from "../assets/eng.jpg";
import { useNavigate } from "react-router-dom";

export default function MidPageCta() {
  const navigate = useNavigate();
  return (
    <Box
      data-aos="fade"
      w="100%"
      h={{ base: "250px", md: "300px" }}
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="primary.700"
        opacity={0.9}
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
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight="bold"
          color="white"
          mb={4}
        >
          Your Operations, Our Expertise
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="white"
          mb={6}
        >
          From installations to maintenance, partner with us for reliable
          industrial solutions that keep your business moving.
        </Text>
        <Button
          size="lg"
          bg="orange.400"
          color="white"
          _hover={{ bg: "orange.500" }}
          onClick={() => navigate("/contact")}
        >
          Talk to us
        </Button>
      </Flex>
    </Box>
  );
}
