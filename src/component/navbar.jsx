import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex
      position={"fixed"}
      top={0}
      w="full"
      zIndex={10}
      justify="space-around"
      p={4}
      bg="white"
      boxShadow={"md"}
      cursor={"pointer"}
    >
      <Flex>
        <Heading color="gray.700" fontWeight={"bold"}>
          GMO
        </Heading>
      </Flex>

      <Flex gap={8} color="gray.700" fontWeight={"bold"}>
        <Text
          color="gray.700"
          fontWeight={"bold"}
          _hover={{ color: "primary.500" }}
        >
          HOME
        </Text>
        <Text
          color="gray.700"
          fontWeight={"bold"}
          _hover={{ color: "primary.500" }}
        >
          ABOUT US
        </Text>
        <Text
          color="gray.700"
          fontWeight={"bold"}
          _hover={{ color: "primary.500" }}
        >
          SERVICES
        </Text>
        <Text
          color="gray.700"
          fontWeight={"bold"}
          _hover={{ color: "primary.500" }}
        >
          PAGES
        </Text>
        <Text
          color="gray.700"
          fontWeight={"bold"}
          _hover={{ color: "primary.500" }}
        >
          CONTACT
        </Text>
      </Flex>
    </Flex>
  );
}
