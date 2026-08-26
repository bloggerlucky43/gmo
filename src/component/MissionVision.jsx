import { Box, Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FaBullseye, FaEye, FaCalendarAlt, FaMapMarkerAlt, FaIdCard, FaBriefcase } from "react-icons/fa";
import {
  FOUNDED_YEAR,
  INDUSTRY,
  MISSION,
  RC_NUMBER,
  SLOGAN,
  VISION,
} from "../config/contact";
import SectionHeading from "./SectionHeading";

/* Mission, vision and the registration facts all come straight from the company
 * profile document in src/assets - nothing here is drafted copy. The vision line
 * is also the company slogan, which is why it gets the display treatment rather
 * than sitting as one more paragraph. */

const PILLARS = [
  {
    icon: FaBullseye,
    eyebrow: "Our mission",
    body: MISSION,
  },
  {
    icon: FaEye,
    eyebrow: "Our vision",
    body: VISION,
  },
];

/* Team size is deliberately absent: the profile document says 17 personnel while
 * midpage.jsx publishes "50+ Skilled Workers". Until the owner confirms which
 * figure is right (17 permanent staff vs. 50+ including contract labour?),
 * publishing either here would just repeat the contradiction. */
const FACTS = [
  { icon: FaCalendarAlt, label: "Established", value: String(FOUNDED_YEAR) },
  { icon: FaIdCard, label: "RC number", value: RC_NUMBER },
  { icon: FaMapMarkerAlt, label: "Base", value: "Ewekoro, Ogun State" },
  { icon: FaBriefcase, label: "Sector", value: INDUSTRY },
];

export default function MissionVision({ bg = "white" }) {
  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="mission">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        <SectionHeading
          eyebrow="Purpose"
          title="Mission & vision"
          subtitle="What we set out to do, and the standard we measure ourselves against."
          align="center"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {PILLARS.map((pillar, index) => (
            <Flex
              key={pillar.eyebrow}
              direction="column"
              bg="white"
              rounded="2xl"
              borderWidth="1px"
              borderColor="gray.200"
              borderTopWidth="4px"
              borderTopColor="orange.500"
              boxShadow="sm"
              p={{ base: 7, md: 9 }}
              transition="transform 0.25s, box-shadow 0.25s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <Flex
                boxSize="52px"
                rounded="lg"
                bg="primary.500"
                color="orange.400"
                align="center"
                justify="center"
                mb={6}
                flexShrink={0}
              >
                <Icon as={pillar.icon} aria-hidden="true" boxSize={6} />
              </Flex>

              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color="orange.500"
                mb={3}
              >
                {pillar.eyebrow}
              </Text>

              <Text
                color="gray.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
              >
                {pillar.body}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

        {/* Slogan band - the vision compressed to the three words the company
            actually leads with. */}
        <Flex
          mt={{ base: 10, md: 14 }}
          direction="column"
          align="center"
          textAlign="center"
          position="relative"
          overflow="hidden"
          rounded="2xl"
          px={{ base: 6, md: 12 }}
          py={{ base: 12, md: 16 }}
          bgImage="linear-gradient(135deg, #0A3D62 0%, #083357 50%, #041a36 100%)"
          data-aos="fade-up"
        >
          <Box
            aria-hidden="true"
            position="absolute"
            inset="0"
            pointerEvents="none"
            bgImage="radial-gradient(circle at 85% 15%, rgba(255,102,0,0.18), transparent 55%)"
          />

          <Box position="relative">
            <Heading
              as="p"
              fontSize={{ base: "3xl", md: "5xl" }}
              color="white"
              lineHeight="1.15"
              letterSpacing="tight"
            >
              {SLOGAN}
            </Heading>
            <Box h="3px" w="72px" bg="orange.400" mx="auto" my={6} />
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              color="whiteAlpha.900"
              maxW="620px"
              mx="auto"
              lineHeight="1.8"
            >
              {VISION}
            </Text>
          </Box>
        </Flex>

        {/* Verifiable company facts. */}
        <SimpleGrid
          columns={{ base: 2, lg: 4 }}
          gap={{ base: 4, md: 6 }}
          mt={{ base: 8, md: 10 }}
        >
          {FACTS.map((fact, index) => (
            <Flex
              key={fact.label}
              direction="column"
              bg="gray.50"
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              borderLeftWidth="3px"
              borderLeftColor="orange.500"
              px={{ base: 4, md: 5 }}
              py={{ base: 4, md: 5 }}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <Icon
                as={fact.icon}
                aria-hidden="true"
                boxSize={4}
                color="orange.500"
                mb={3}
              />
              <Text
                fontSize="10px"
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
                color="gray.500"
                mb={1}
              >
                {fact.label}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md" }}
                color="primary.500"
                lineHeight="1.4"
              >
                {fact.value}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
