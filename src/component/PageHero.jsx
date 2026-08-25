import { Flex, Heading, Text } from "@chakra-ui/react";

/**
 * Shared header band for interior pages. Solid brand navy rather than a photo,
 * so extra pages cost no extra image weight.
 */
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <Flex
      as="header"
      bg="primary.500"
      w="100%"
      pt={{ base: "18vh", md: "22vh" }}
      pb={{ base: 12, md: 16 }}
      px={4}
      direction="column"
      align="center"
      textAlign="center"
    >
      {eyebrow && (
        <Text
          fontSize="xs"
          fontWeight="bold"
          letterSpacing="widest"
          textTransform="uppercase"
          color="orange.400"
          mb={3}
        >
          {eyebrow}
        </Text>
      )}
      <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} color="white" mb={4}>
        {title}
      </Heading>
      {subtitle && (
        <Text
          color="whiteAlpha.800"
          maxW="640px"
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="1.7"
        >
          {subtitle}
        </Text>
      )}
    </Flex>
  );
}
