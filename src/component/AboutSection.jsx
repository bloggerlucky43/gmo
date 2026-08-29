import { Box, Flex, Heading, Image, List } from "@chakra-ui/react";
import industryImage from "../assets/interior.webp";
// The founder now has a section of his own - see CeoSection.jsx.
import { FaCheckCircle } from "react-icons/fa";
import TextType from "./stylings/TextType";
import { FOUNDED_YEAR, LEGAL_NAME } from "../config/contact";

/* Both paragraphs and the list below are drawn from the "About Us" and "Our
 * Services" sections of the company profile document in src/assets. */
const CAPABILITIES = [
  "Electrical Installation & Maintenance",
  "Mechanical Fabrication & Fittings",
  "Civil Engineering Jobs",
  "Shutdown Services",
  "Rehabilitation of Mining Areas",
  "Vegetation Control & Tree Planting",
  "Landscaping & Site Preparation",
  "Pond & Lake Management",
  "General Contracting Services",
];

export default function AboutSection() {
  return (
    <Box w="100%" py={16} bg="white" id="about">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="7xl"
        mx="auto"
        px={6}
        gap={10}
      >
        {/* Left Image */}
        <Box flex="1" data-aos="slide-up">
          <Image
            src={industryImage}
            alt="Industrial Services"
            rounded="2xl"
            shadow="lg"
            objectFit="cover"
            w="100%"
            h={{ base: "250px", md: "400px" }}
          />
        </Box>

        {/* Right Content */}
        <Box flex="1" data-aos="slide-up">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color="primary.500"
            mb={6}
          >
            About Us
          </Heading>
          <TextType
            text={[
              `${LEGAL_NAME} is a trusted Nigerian general contracting company established in ${FOUNDED_YEAR}, providing reliable technical, engineering and industrial support services across multiple sectors. With a strong commitment to professionalism, growth and excellence, we deliver quality solutions tailored to the needs of industries, businesses and residential clients.`,
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            textColors={["black"]}
          />

          <List.Root gap="2" mt={6} variant="plain" align="center">
            {CAPABILITIES.map((capability) => (
              <List.Item key={capability}>
                <List.Indicator asChild color="orange.500">
                  <FaCheckCircle />
                </List.Indicator>
                {capability}
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Flex>
    </Box>
  );
}
