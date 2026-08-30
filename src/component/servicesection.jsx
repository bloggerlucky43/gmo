import { SimpleGrid, Flex, Text, Box, Icon } from "@chakra-ui/react";
import {
  FaBolt,
  FaCog,
  FaFileContract,
  FaHardHat,
  FaLeaf,
  FaMountain,
  FaPowerOff,
  FaTools,
  FaTractor,
  FaTree,
  FaUsers,
  FaWater,
  FaWrench,
} from "react-icons/fa";
import ServiceCard from "./servicecard";
import { SERVICES } from "../config/services";
import eng from "../assets/eng.webp";
import enginner from "../assets/enginnerimage.webp";
import civil from "../assets/civil.webp";
import clothing from "../assets/clothing.webp";
import photo from "../assets/photo.webp";
import heavy from "../assets/heavy.webp";
import excavator from "../assets/excavator.webp";

/*  The eight photo cards are the headline services, all of them named in the
 *  company profile document (src/assets). The capability list underneath carries
 *  the full set, because several real services - pond and lake management, tree
 *  planting, adhoc industrial work - have no photography to sit behind a card,
 *  and leaving them off the site entirely was the bigger problem.
 *
 *  The list itself lives in src/config/services.js, which also feeds the quote
 *  and contact form dropdowns. Services flagged `documented: false` there are on
 *  the site but absent from the profile document - confirm those with the owner
 *  before publish and delete any the company does not actually offer. */

const HEADLINE_SERVICES = [
  {
    src: eng,
    title: "Electrical Installation & Maintenance",
    desc: "Installation, testing and ongoing maintenance of industrial electrical systems, from switchgear and distribution to plant-wide power.",
  },
  {
    src: enginner,
    title: "Mechanical Fabrication & Fittings",
    desc: "Fabrication, fitting and mechanical installation work for plant and process equipment, carried out to specification on site or in the yard.",
  },
  {
    src: civil,
    title: "Civil Engineering Works",
    desc: "Civil engineering jobs across industrial and commercial sites, delivered as part of our general contracting capability.",
  },
  {
    src: clothing,
    title: "Industrial Shutdown Services",
    desc: "Planned and emergency shutdown support with crews mobilised to a schedule, so the plant comes back up on time.",
  },
  {
    src: photo,
    title: "Mining Area Rehabilitation",
    desc: "Rehabilitation and vegetation control across active and closed mining areas, keeping sites safe, accessible and compliant.",
  },
  {
    src: heavy,
    title: "Landscaping & Site Preparation",
    desc: "Land clearing, grading and site preparation ahead of industrial, construction or mining works.",
  },
  {
    src: excavator,
    title: "General Contracting Services",
    desc: "Full general contracting, taking single-point responsibility for multi-trade scopes from mobilisation to handover.",
  },
];

/*  `ALL_SERVICES` is derived from src/config/services.js so the grid, the quote
 *  form dropdown and the contact form dropdown can never drift apart. This file
 *  only supplies the icon for each name. */
const SERVICE_ICONS = {
  "Electrical Installation & Maintenance": FaBolt,
  "Mechanical Fabrication & Fittings": FaWrench,
  "Civil Engineering Jobs": FaHardHat,
  "Shutdown Services": FaPowerOff,
  "Rehabilitation of Mining Areas": FaMountain,
  "Vegetation Control Services": FaLeaf,
  "Adhoc Industrial Services": FaCog,
  "Landscaping & Site Preparation": FaTractor,
  "General Contracting Services": FaFileContract,
  "Pond & Lake Management Specialists": FaWater,
  "Tree Planting & Maintenance": FaTree,
  "Industrial Equipment Rental": FaTools,
  "Labour Recruitment & Supply": FaUsers,
};

const ALL_SERVICES = SERVICES.map((service) => ({
  ...service,
  icon: SERVICE_ICONS[service.name] ?? FaCog,
}));

export default function ServicesSection() {
  return (
    <Flex
      data-aos="fade"
      w={{ base: "90%", md: "85%", lg: "70%" }}
      cursor="pointer"
      mt={{ base: "8vh", md: "10vh" }}
      p={4}
      direction="column"
      justifySelf={"center"}
    >
      <Flex direction="column" data-aos="fade-up">
        <Text
          color="primary.500"
          fontWeight={"bold"}
          fontSize={{ base: "x-large", md: "xx-large" }}
        >
          SERVICES
        </Text>
        <Text mt={{ base: "6", md: 8 }} color="gray.800">
          We deliver reliable and high-quality services tailored to your needs.
        </Text>
      </Flex>

      <SimpleGrid
        data-aos="fade-up"
        columns={{ base: 1, md: 2, lg: 3 }}
        mt={{ base: "5", md: "10" }}
      >
        {HEADLINE_SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            src={service.src}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </SimpleGrid>

      {/* ---------- Full capability list ---------- */}
      <Box mt={{ base: 14, md: 20 }} data-aos="fade-up">
        <Text
          color="primary.500"
          fontWeight="bold"
          fontSize={{ base: "lg", md: "xl" }}
        >
          Everything we take on
        </Text>
        <Text mt={3} mb={{ base: 6, md: 8 }} color="gray.600" fontSize="sm">
          The full list of services we are set up to deliver. If what you need is
          adjacent to something here, ask us.
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 3, md: 4 }}>
          {ALL_SERVICES.map((service, index) => (
            <Flex
              key={service.name}
              align="center"
              gap={4}
              bg="gray.50"
              borderWidth="1px"
              borderColor="gray.200"
              borderLeftWidth="3px"
              borderLeftColor="orange.500"
              rounded="lg"
              px={4}
              py={4}
              transition="background 0.2s, transform 0.2s, box-shadow 0.2s"
              _hover={{
                bg: "white",
                transform: "translateY(-2px)",
                boxShadow: "md",
              }}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 60}
            >
              <Flex
                boxSize={9}
                rounded="md"
                bg="primary.500"
                color="orange.400"
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon as={service.icon} aria-hidden="true" boxSize={4} />
              </Flex>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="primary.500"
                lineHeight="1.5"
              >
                {service.name}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
