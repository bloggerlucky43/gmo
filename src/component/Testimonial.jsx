import { Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";

/*  ============================================================
 *  PLACEHOLDER CONTENT - DO NOT PUBLISH AS-IS
 *  ============================================================
 *  TODO(content): every entry below is an invented sample, kept only so the
 *  layout can be reviewed. Replace all of them with real, approved client
 *  quotes before this goes live.
 *
 *  Publishing invented testimonials as if they were genuine is a false-
 *  advertising exposure (FCCPA here in Nigeria, and equivalent consumer-
 *  protection rules elsewhere) on top of destroying trust if a visitor
 *  checks. Any quote that survives to production needs: written permission
 *  to publish, the person's real name and role, their company, and ideally
 *  the project scope.
 *
 *  If you don't have approved quotes yet, render fewer cards rather than
 *  filling the row with invented ones - `limit` below supports that.
 *  ============================================================ */
const testimonials = [
  {
    quote:
      "They handled the plant-wide electrical retrofit without costing us a single unplanned shutdown. Their engineers worked around our production schedule instead of asking us to work around theirs.",
    name: "Placeholder Name",
    role: "Plant Manager",
    company: "Sample Manufacturing Co.",
    sector: "Manufacturing",
    project: "Plant-wide electrical retrofit - 14 weeks",
  },
  {
    quote:
      "We needed 40 certified hands on site inside two weeks. They filled the roster in nine days, every one of them with valid certification and the right PPE. That is not normal in this market.",
    name: "Placeholder Name",
    role: "Project Director",
    company: "Sample Construction Ltd.",
    sector: "Construction",
    project: "Workforce resourcing - 40 personnel",
  },
  {
    quote:
      "Their vegetation clearance crews cleared access roads across three active pits and kept them clear through the wet season. Our haul trucks never lost a day to overgrowth.",
    name: "Placeholder Name",
    role: "Site Superintendent",
    company: "Sample Mining Plc",
    sector: "Mining",
    project: "Access road clearance - 3 pits, ongoing",
  },
  {
    quote:
      "The excavators arrived when they said they would, in the condition they said they would be in, with an operator who knew the machine. We have since moved most of our plant hire to them.",
    name: "Placeholder Name",
    role: "Operations Lead",
    company: "Sample Civil Works",
    sector: "Civil Engineering",
    project: "Equipment rental - rolling contract",
  },
  {
    quote:
      "Their crew rehabilitated ground we had written off after the pit closed. Two seasons on it is still holding, which is more than we expected when we signed.",
    name: "Placeholder Name",
    role: "HSE Manager",
    company: "Sample Quarry Ltd.",
    sector: "Mining",
    project: "Mining area rehabilitation - 12 months",
  },
  {
    quote:
      "We gave them a shutdown window and they handed the plant back inside it. That sounds like the minimum until you have worked with contractors who cannot do it.",
    name: "Placeholder Name",
    role: "Facility Director",
    company: "Sample Industrial Co.",
    sector: "Industrial",
    project: "Planned shutdown support - biannual",
  },
];

const initials = (value) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export default function Testimonials({
  limit,
  showHeading = true,
  bg = "gray.50",
}) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="testimonials">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        {showHeading && (
          <Box maxW="640px" mb={{ base: 10, md: 14 }} data-aos="fade-up">
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="orange.500"
              mb={3}
            >
              What our clients say
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="primary.500"
              lineHeight="1.2"
              mb={4}
            >
              Judged on site, not on paper
            </Heading>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
              Plant managers, site superintendents and HSE leads on what it is
              like to have our crews and equipment on their projects.
            </Text>
          </Box>
        )}

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 6, md: 8 }}
          alignItems="stretch"
        >
          {items.map((item, index) => (
            <Flex
              key={`${item.company}-${index}`}
              as="blockquote"
              direction="column"
              bg="white"
              p={{ base: 6, md: 7 }}
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              borderLeftWidth="3px"
              borderLeftColor="orange.500"
              boxShadow="sm"
              transition="transform 0.25s, box-shadow 0.25s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Sector acts as a categoriser so a buyer can find their own industry */}
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
                color="primary.400"
                mb={4}
              >
                {item.sector}
              </Text>

              <Text
                aria-hidden="true"
                fontSize="5xl"
                lineHeight="0.7"
                fontWeight="bold"
                color="orange.500"
                opacity={0.3}
                mb={3}
              >
                &ldquo;
              </Text>

              <Text
                color="gray.700"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.8"
                flex="1"
              >
                {item.quote}
              </Text>

              <Box h="1px" bg="gray.200" my={5} />

              <Flex align="center" gap={3}>
                <Flex
                  boxSize="44px"
                  flexShrink={0}
                  rounded="full"
                  bg="primary.500"
                  color="white"
                  align="center"
                  justify="center"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="wide"
                  aria-hidden="true"
                >
                  {initials(item.company)}
                </Flex>
                <Box minW={0}>
                  <Text fontWeight="bold" fontSize="sm" color="gray.900">
                    {item.name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {item.role} &middot; {item.company}
                  </Text>
                </Box>
              </Flex>

              <Text fontSize="xs" color="gray.500" mt={3}>
                {item.project}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
