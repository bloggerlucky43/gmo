import { Box, Flex, Text, Button } from "@chakra-ui/react";
import intmin from "../assets/intmin.jpg";
import { useNavigate } from "react-router-dom";

export const ServicePageComponent = () => {
  const navigate = useNavigate();
  return (
    <Box mt="8vh">
      <Box
        w="100%"
        cursor="pointer"
        h={{ base: "350px" }}
        bgImage={`url(${intmin})`}
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
              Delivering Excellence in Industrial Solutions
            </Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              color="white"
              mb={6}
              maxW="600px"
            >
              From electrical and mechanical installations to labour recruiting,
              equipment rentals, cleaning, and environmental services, we
              provide complete, reliable, and innovative solutions that keep
              your operations running smoothly.
            </Text>

            <Button
              bg="orange.400"
              color="white"
              size="lg"
              _hover={{ bg: "orange.500" }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
