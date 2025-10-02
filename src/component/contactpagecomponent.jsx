import { Box, Flex, Text } from "@chakra-ui/react";
import building from "../assets/excavator.jpg";
const ContactPageComponent = () => {
  return (
    <Box mt="8vh">
      <Box
        w="100%"
        cursor="pointer"
        h={{ base: "100px", md: "350px" }}
        bgImage={`url(${building})`}
        bgSize="cover"
        bgPos={"center"}
        overflow="hidden"
        position="relative"
      >
        {/* overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg={"primary.700"}
          opacity={0.8}
        >
          <Flex
            position="relative"
            zIndex={1}
            w={{ base: "100%", md: "70%" }}
            h="100%"
            align="center"
            justifySelf="center"
            px={4}
          >
            <Text
              ml="2vw"
              fontSize={{ base: "lg", md: "3xl", lg: "4xl" }}
              fontWeight={"bold"}
              color="orange.500"
            >
              Contact
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPageComponent;
