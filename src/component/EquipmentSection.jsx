import { Box, Flex, Text, Image, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { FaArrowRight, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { whatsappHref } from "../config/contact";

import imgWheelbarrows from "../assets/equipments/WhatsApp Image 2026-08-28 at 1.48.38 PM.jpeg";
import imgLeafBlower from "../assets/equipments/WhatsApp Image 2026-08-28 at 1.49.22 PM.jpeg";
import imgJackhammer from "../assets/equipments/WhatsApp Image 2026-08-28 at 1.50.44 PM.jpeg";
import imgBrushCutter from "../assets/equipments/WhatsApp Image 2026-08-28 at 3.03.42 PM.jpeg";
import imgWeldingMachine from "../assets/equipments/WhatsApp Image 2026-08-28 at 3.04.40 PM.jpeg";

/*  ============================================================
 *  GMO FLEET & EQUIPMENT
 *  ============================================================ */
const EQUIPMENT = [
  {
    name: "Inverter ARC Welding Machine",
    category: "Welding & Fabrication",
    image: imgWeldingMachine,
    specs: {
      Model: "ARC-160 Professional",
      "Input Voltage": "220V - 240V",
      "Duty Cycle": "60% at rated output",
      Application: "MMA welding, site fabrication, steel repairs",
    },
    available: true,
  },
  {
    name: "Demolition Hammer / Jackhammer",
    category: "Power Tools",
    image: imgJackhammer,
    specs: {
      Brand: "Bosch Professional",
      "Impact rate": "900 - 1890 bpm",
      "Impact energy": "16.8 J",
      Application: "Concrete breaking, demolition, chipping",
    },
    available: true,
  },
  {
    name: "Cordless Leaf Blower / Air Blower",
    category: "Maintenance & Cleaning",
    image: imgLeafBlower,
    specs: {
      Brand: "Bosch Professional 18V",
      Power: "Lithium-ion Battery powered",
      "Max air speed": "270 km/h",
      Application: "Dust clearing, site cleanup, waste management",
    },
    available: true,
  },
  {
    name: "Petrol String Trimmer / Brush Cutter",
    category: "Landscaping",
    image: imgBrushCutter,
    specs: {
      Engine: "2-Stroke Petrol Engine",
      Displacement: "33cc - 43cc",
      Application: "Weed cutting, grass trimming, land clearing",
      "Safety gear": "Harness and guard included",
    },
    available: true,
  },
  {
    name: "Heavy-Duty Wheelbarrows",
    category: "Material Handling",
    image: imgWheelbarrows,
    specs: {
      Capacity: "80L - 100L volume",
      Tray: "Galvanized steel / heavy-duty tray",
      Application: "Concrete, sand, mortar, and site debris transport",
      Availability: "Individual or bulk hire options",
    },
    available: true,
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
