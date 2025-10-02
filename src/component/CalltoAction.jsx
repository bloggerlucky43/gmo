import { Box, Flex, Text, Button } from "@chakra-ui/react";
import bgImage from "../assets/eng.jpg";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <Box
      data-aos="slide-up"
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
        data-aos="slide-up"
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
        data-aos="slide-up"
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
          Don’t Let Downtime Slow You Down
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="white"
          mb={6}
        >
          Our team is ready to provide fast, skilled labour and equipment when
          you need it most.
        </Text>
        <Button
          data-aos="slide-up"
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
