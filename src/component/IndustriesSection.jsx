import { Box, Flex, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import {
  FaIndustry,
  FaMountain,
  FaHardHat,
  FaOilCan,
  FaCogs,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";

/*  These are the "target customers" named in the company profile document
 *  (src/assets), in the document's own order, plus Construction & Civil - which
 *  the document supports through its "Civil Engineering Jobs" service.
 *
 *  Removed in the process: Warehousing & Logistics, Food & Beverage Processing
 *  and Power & Utilities. Those were placeholder sectors with no backing in the
 *  document. If the company has genuinely worked in them, add them back with the
 *  services line filled in from real jobs. */
const INDUSTRIES = [
  {
    name: "Oil & Gas",
    icon: FaOilCan,
    services: "Shutdown support, mechanical fitting, adhoc industrial services",
  },
  {
    name: "Manufacturing",
    icon: FaIndustry,
    services: "Electrical & mechanical installation, plant maintenance",
  },
  {
    name: "Mining & Quarrying",
    icon: FaMountain,
    services: "Area rehabilitation, vegetation control, site preparation",
  },
  {
    name: "Industrial Facilities",
    icon: FaCogs,
    services: "General contracting, skilled labour supply, shutdown crews",
  },
  {
    name: "Construction & Civil",
    icon: FaHardHat,
    services: "Civil engineering works, land clearing, equipment and operators",
  },
  {
    name: "Residential & Home Clients",
    icon: FaHome,
    services: "Electrical work, landscaping, pond and lake management",
  },
];

export default function IndustriesSection({ bg = "white" }) {
  const navigate = useNavigate();

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="industries">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        <SectionHeading
          eyebrow="Industries served"
          title="Sectors we work in"
          subtitle="We work to the standards each sector demands, from hygiene-critical processing plants to active mine sites."
          align="center"
        />

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 5, md: 6 }}>
          {INDUSTRIES.map((industry, index) => (
            <Flex
              key={industry.name}
              as="button"
              type="button"
              onClick={() => navigate("/services")}
              textAlign="left"
              direction="column"
              bg="white"
              p={{ base: 6, md: 7 }}
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              boxShadow="sm"
              cursor="pointer"
              transition="transform 0.25s, box-shadow 0.25s, border-color 0.25s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
                borderColor: "orange.400",
              }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "orange.400",
                outlineOffset: "2px",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <Flex
                boxSize={12}
                rounded="lg"
                bg="primary.500"
                color="orange.400"
                align="center"
                justify="center"
                mb={4}
                flexShrink={0}
              >
                <Icon as={industry.icon} boxSize={5} />
              </Flex>

              <Text fontWeight="bold" fontSize="md" color="primary.500" mb={2}>
                {industry.name}
              </Text>

              <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                {industry.services}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
