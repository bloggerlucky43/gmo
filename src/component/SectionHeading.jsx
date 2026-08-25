import { Box, Heading, Text } from "@chakra-ui/react";

/**
 * Shared section header (eyebrow + heading + optional subtitle), so every
 * section on the site introduces itself the same way.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  maxW = "660px",
  mb = { base: 10, md: 14 },
}) {
  const centered = align === "center";
  return (
    <Box
      maxW={maxW}
      mb={mb}
      mx={centered ? "auto" : undefined}
      textAlign={centered ? "center" : "left"}
      data-aos="fade-up"
    >
      {eyebrow && (
        <Text
          fontSize="xs"
          fontWeight="bold"
          letterSpacing="widest"
          textTransform="uppercase"
          color="orange.500"
          mb={3}
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        color="primary.500"
        lineHeight="1.2"
        mb={subtitle ? 4 : 0}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
