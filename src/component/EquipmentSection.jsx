import { Box, Flex, Text, Image, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { FaArrowRight, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { whatsappHref } from "../config/contact";

/* Existing site photography stands in for real machine photos. */
import excavator from "../assets/excavator.webp";
import heavy from "../assets/heavy.webp";
import building from "../assets/building.webp";
import eng from "../assets/eng.webp";

/*  ============================================================
 *  PLACEHOLDER CONTENT
 *  ============================================================
 *  TODO(content): replace with the real fleet. Buyers search for a specific
 *  machine, so accuracy here converts directly - list only what you can
 *  actually supply, and keep `available` honest.
 *
 *  `image`  - reuses existing site photography for now. Swap for a photo of
 *             the actual machine.
 *  `specs`  - shown as label/value rows. Add or remove freely.
 *  `available` - false renders an "On request" badge instead of "Available".
 *  ============================================================ */
const EQUIPMENT = [
  {
    name: "Tracked Excavator",
    category: "Earthmoving",
    image: excavator,
    specs: {
      "Operating weight": "20 - 30 tonnes",
      "Bucket capacity": "1.0 - 1.4 m³",
      "Max dig depth": "6.5 m",
      Operator: "Certified operator included",
    },
    available: true,
  },
  {
    name: "Bulldozer / Land Scraper",
    category: "Site Preparation",
    image: heavy,
    specs: {
      "Blade width": "3.2 m",
      Application: "Grading, levelling, topsoil stripping",
      "Ground pressure": "Low-ground-pressure tracks available",
      Operator: "Certified operator included",
    },
    available: true,
  },
  {
    name: "Tipper Trucks",
    category: "Haulage",
    image: building,
    specs: {
      Capacity: "10 - 30 tonnes",
      Application: "Spoil removal, aggregate haulage",
      Availability: "Fleet hire, day or contract rate",
      Operator: "Licensed driver included",
    },
    available: true,
  },
  {
    name: "Industrial Cleaning Plant",
    category: "Cleaning",
    image: eng,
    specs: {
      Equipment: "Pressure washers, scrubbers, vacuum units",
      Application: "Machine halls, warehouses, production floors",
      "Crew size": "Scalable to site requirement",
      Availability: "Scheduled or shutdown turnaround",
    },
    available: true,
  },
  {
    name: "Generator Sets",
    category: "Power",
    image: eng,
    specs: {
      Output: "Range available on request",
      Application: "Site power, standby cover",
      Fuel: "Diesel",
      Servicing: "Maintenance included on contract hire",
    },
    available: false,
  },
  {
    name: "Access & Lifting Equipment",
    category: "Access",
    image: heavy,
    specs: {
      Equipment: "Scaffolding, hoists, lifting gear",
      Application: "High-level installation and cleaning",
      Certification: "Inspected and certified before dispatch",
      Availability: "Project hire",
    },
    available: false,
  },
];

export default function EquipmentSection({
  limit,
  showHeading = true,
  showViewAll = false,
  bg = "gray.50",
}) {
  const navigate = useNavigate();
  const items = limit ? EQUIPMENT.slice(0, limit) : EQUIPMENT;

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="equipment">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        {showHeading && (
          <SectionHeading
            eyebrow="Equipment & fleet"
            title="Plant available for hire"
            subtitle="Machines are serviced, certified and dispatched with trained operators. Tell us the job and we will confirm availability and rate."
          />
        )}

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {items.map((item, index) => (
            <Flex
              key={item.name}
              direction={{ base: "column", sm: "row" }}
              bg="white"
              rounded="xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="gray.200"
              boxShadow="sm"
              transition="transform 0.25s, box-shadow 0.25s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <Box
                w={{ base: "100%", sm: "38%" }}
                h={{ base: "180px", sm: "auto" }}
                minH={{ sm: "200px" }}
                flexShrink={0}
                position="relative"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                />
              </Box>

              <Flex direction="column" p={{ base: 5, md: 6 }} flex="1" minW={0}>
                <Flex justify="space-between" align="flex-start" gap={3} mb={3}>
                  <Box minW={0}>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      letterSpacing="wider"
                      textTransform="uppercase"
                      color="orange.500"
                      mb={1}
                    >
                      {item.category}
                    </Text>
                    <Text fontWeight="bold" fontSize="md" color="primary.500">
                      {item.name}
                    </Text>
                  </Box>

                  <Flex
                    align="center"
                    gap={1.5}
                    flexShrink={0}
                    bg={item.available ? "green.50" : "gray.100"}
                    color={item.available ? "green.700" : "gray.600"}
                    fontSize="xs"
                    fontWeight="bold"
                    px={2.5}
                    py={1}
                    rounded="md"
                  >
                    {item.available && <Icon as={FaCheckCircle} boxSize={3} />}
                    {item.available ? "Available" : "On request"}
                  </Flex>
                </Flex>

                <Flex direction="column" gap={2} flex="1">
                  {Object.entries(item.specs).map(([label, value]) => (
                    <Flex key={label} gap={2} fontSize="xs" align="baseline">
                      <Text color="gray.500" flexShrink={0} minW="110px">
                        {label}
                      </Text>
                      <Text color="gray.700" fontWeight="medium">
                        {value}
                      </Text>
                    </Flex>
                  ))}
                </Flex>

                <Flex
                  as="a"
                  href={whatsappHref(
                    `Hello GMO, I would like to enquire about hiring: ${item.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                  gap={2}
                  mt={4}
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.200"
                  fontSize="xs"
                  fontWeight="bold"
                  color="primary.500"
                  transition="color 0.2s"
                  _hover={{ color: "orange.500" }}
                >
                  <Icon as={FaWhatsapp} boxSize={4} />
                  Enquire about this machine
                </Flex>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>

        {showViewAll && (
          <Flex justify="center" mt={{ base: 10, md: 14 }} data-aos="fade-up">
            <Button
              size="lg"
              bg="primary.500"
              color="white"
              _hover={{ bg: "primary.600" }}
              onClick={() => navigate("/equipment")}
            >
              See the full fleet
              <Icon as={FaArrowRight} boxSize={3} ml={2} />
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
