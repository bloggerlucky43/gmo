import { Box, Flex, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import {
  FaIndustry,
  FaMountain,
  FaHardHat,
  FaWarehouse,
  FaUtensils,
  FaBolt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";

/*  TODO(content): confirm these are the sectors GMO actually serves, and
 *  reorder them so the strongest sectors come first. Remove any the company
 *  has not genuinely worked in. */
const INDUSTRIES = [
  {
    name: "Mining & Quarrying",
    icon: FaMountain,
    services: "Vegetation clearance, haul road maintenance, site preparation",
  },
  {
    name: "Manufacturing",
    icon: FaIndustry,
    services: "Electrical & mechanical installation, plant maintenance",
  },
  {
    name: "Construction & Civil",
    icon: FaHardHat,
    services: "Equipment rental, land scraping, skilled labour supply",
  },
  {
    name: "Warehousing & Logistics",
    icon: FaWarehouse,
    services: "Industrial cleaning, facility maintenance",
  },
  {
    name: "Food & Beverage Processing",
    icon: FaUtensils,
    services: "Water treatment, sanitation, hygiene-critical cleaning",
  },
  {
    name: "Power & Utilities",
    icon: FaBolt,
    services: "Electrical installation, switchgear, workforce resourcing",
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
