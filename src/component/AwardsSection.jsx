import { Box, Flex, Text, SimpleGrid, Icon, Image } from "@chakra-ui/react";
import { FaTrophy, FaCertificate, FaMedal, FaAward } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

/*  ============================================================
 *  PLACEHOLDER CONTENT
 *  ============================================================
 *  TODO(content): replace with the owner's actual awards and
 *  certifications, and delete any entry that does not apply.
 *
 *  Only list awards that were genuinely received and certifications
 *  that are current - this is exactly the kind of claim a procurement
 *  team verifies, and an unverifiable one costs more than it gains.
 *
 *  `image` - leave "" to show the icon badge (current behaviour). Set it
 *            to an imported photo of the certificate or trophy and the
 *            photo renders in place of the icon.
 *  ============================================================ */
const AWARDS = [
  {
    title: "Award Title Placeholder",
    issuer: "Issuing Body",
    year: "2024",
    note: "Short line on what the award recognises.",
    icon: FaTrophy,
    image: "",
  },
  {
    title: "Certification Placeholder",
    issuer: "Certifying Body",
    year: "2023",
    note: "Scope of the certification and what it covers.",
    icon: FaCertificate,
    image: "",
  },
  {
    title: "Recognition Placeholder",
    issuer: "Industry Association",
    year: "2023",
    note: "What the recognition was given for.",
    icon: FaMedal,
    image: "",
  },
  {
    title: "Safety Record Placeholder",
    issuer: "Internal / Client Audit",
    year: "2022",
    note: "For example: man-hours worked with no lost-time incidents.",
    icon: FaAward,
    image: "",
  },
];

export default function AwardsSection({ bg = "gray.50" }) {
  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="awards">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & certifications"
          subtitle="Independent recognition of the standards we hold ourselves to on every site."
          align="center"
        />

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 6, md: 8 }}>
          {AWARDS.map((award, index) => (
            <Flex
              key={award.title}
              direction="column"
              align="center"
              textAlign="center"
              bg="white"
              p={{ base: 6, md: 7 }}
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              borderTopWidth="3px"
              borderTopColor="orange.500"
              boxShadow="sm"
              transition="transform 0.25s, box-shadow 0.25s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {award.image ? (
                <Image
                  src={award.image}
                  alt={award.title}
                  h="72px"
                  w="auto"
                  objectFit="contain"
                  mb={5}
                  loading="lazy"
                />
              ) : (
                <Flex
                  boxSize="72px"
                  rounded="full"
                  bg="primary.500"
                  color="orange.400"
                  align="center"
                  justify="center"
                  mb={5}
                  flexShrink={0}
                >
                  <Icon as={award.icon} boxSize={7} />
                </Flex>
              )}

              <Text
                fontSize="xs"
                fontWeight="bold"
                color="orange.500"
                letterSpacing="wider"
                mb={2}
              >
                {award.year}
              </Text>

              <Text fontWeight="bold" fontSize="md" color="primary.500" mb={1}>
                {award.title}
              </Text>

              <Text fontSize="xs" color="gray.500" mb={3}>
                {award.issuer}
              </Text>

              <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                {award.note}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
