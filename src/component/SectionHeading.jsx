import { Box, Heading, Text } from "@chakra-ui/react";

/**
 * Shared section header (eyebrow + heading + optional subtitle), so every
 * section on the site introduces itself the same way.
 *
 * The three colours default to the light-background palette every other
 * section uses. They are overridable because FounderSection sits on a deep
 * navy band, where the default navy heading and gray.600 subtitle are close to
 * invisible - pass the light equivalents there rather than forking this
 * component.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  maxW = "660px",
  mb = { base: 10, md: 14 },
  eyebrowColor = "orange.500",
  titleColor = "primary.500",
  subtitleColor = "gray.600",
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
          color={eyebrowColor}
          mb={3}
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={titleColor}
        lineHeight="1.2"
        mb={subtitle ? 4 : 0}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text color={subtitleColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
