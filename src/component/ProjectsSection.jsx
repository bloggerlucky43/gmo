import { Box, Flex, Text, Image, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { FaPlay, FaClock, FaHardHat, FaArrowRight, FaImages } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";

/* Existing site photography stands in for real project shots. */
import excavator from "../assets/excavator.webp";
import building from "../assets/building.webp";
import heavy from "../assets/heavy.webp";
import intmin from "../assets/intmin.webp";
import interior from "../assets/interior.webp";
import warehouse from "../assets/warehouse.webp";
import eng from "../assets/eng.webp";

/*  ============================================================
 *  ONE REAL ENTRY, FIVE PLACEHOLDERS
 *  ============================================================
 *  The first entry is real: it is the "Key Achievement" recorded in the company
 *  profile document (src/assets). Everything after it is still invented.
 *
 *  TODO(owner): LafargeHolcim is named because the company names them in its own
 *  profile document - but a profile deck shown to a few buyers is not the same as
 *  publishing a client's name on the open web. Get written permission from them
 *  before this goes live. If permission is refused, change `client` to "A
 *  multinational cement producer, Nigeria" and clear `clientNamed` - the entry
 *  keeps all of its value without the name.
 *
 *  TODO(content): replace entries 2-6 with real completed projects.
 *
 *  `image`  - currently reuses existing site photography as a stand-in.
 *             Swap for a real photo of the job.
 *  `video`  - leave "" and no play button renders. Paste a YouTube/Vimeo
 *             link (or an uploaded file URL) and the play overlay appears
 *             automatically.
 *  `gallery`- number of extra photos you have for this job. Leave 0 until
 *             you add them; the badge only shows when it is above 0.
 *  ============================================================ */
const PROJECTS = [
  {
    title: "Shutdown, Stock Audit & Vegetation Control",
    client: "LafargeHolcim Africa Plc",
    clientNamed: true,
    sector: "Manufacturing",
    scope:
      "Delivered industrial shutdown services, periodic stock audits and vegetation control for a multinational cement producer, executed with professionalism, efficiency and on-time completion.",
    duration: "Multi-scope contract",
    crew: "Shutdown, audit & vegetation teams",
    outcome: "Delivered on time, every scope",
    image: eng,
    video: "",
    gallery: 0,
  },
  {
    title: "Plant-wide Electrical Retrofit",
    client: "Cement producer, Ogun State",
    sector: "Manufacturing",
    scope:
      "Replaced ageing switchgear and re-cabled two production lines while the plant stayed in operation, phasing the work around scheduled maintenance windows.",
    duration: "14 weeks",
    crew: "18 technicians, 2 engineers",
    outcome: "Zero unplanned shutdowns",
    image: interior,
    video: "",
    gallery: 0,
  },
  {
    title: "Mining Access Road Clearance",
    client: "Quarry operator, Ogun State",
    sector: "Mining",
    scope:
      "Cleared and maintained haul road corridors across three active pits, including wet-season vegetation control and drainage clearing.",
    duration: "Ongoing contract",
    crew: "24 operatives, 3 machines",
    outcome: "Haul roads passable year-round",
    image: intmin,
    video: "",
    gallery: 0,
  },
  {
    title: "Site Preparation & Land Scraping",
    client: "Civil works contractor",
    sector: "Construction",
    scope:
      "Levelled and prepared a greenfield site ahead of foundation works, including topsoil stripping, grading and compaction to specification.",
    duration: "9 weeks",
    crew: "12 operatives, 4 machines",
    outcome: "Handed over ahead of schedule",
    image: heavy,
    video: "",
    gallery: 0,
  },
  {
    title: "Equipment Supply — Earthmoving Fleet",
    client: "Infrastructure project",
    sector: "Civil Engineering",
    scope:
      "Supplied excavators and support plant with certified operators on a rolling hire basis, including on-site servicing and standby cover.",
    duration: "Rolling contract",
    crew: "6 operators",
    outcome: "98% machine availability",
    image: excavator,
    video: "",
    gallery: 0,
  },
  {
    title: "Planned Shutdown Support",
    client: "Logistics and storage operator",
    sector: "Industrial",
    scope:
      "Mechanical and electrical works executed inside a planned shutdown window, sequenced so the plant handed back on the agreed date with no extension.",
    duration: "Weekend turnaround",
    crew: "20 operatives",
    outcome: "No production days lost",
    image: warehouse,
    video: "",
    gallery: 0,
  },
  {
    title: "Pond & Lake Management Programme",
    client: "Industrial facility, Ogun State",
    sector: "Environmental",
    scope:
      "Ongoing management of on-site water bodies alongside tree planting and vegetation control, keeping the grounds stable and compliant year-round.",
    duration: "12 months",
    crew: "9 operatives",
    outcome: "Grounds stable through wet season",
    image: building,
    video: "",
    gallery: 0,
  },
];

const MetaRow = ({ icon, children }) => (
  <Flex align="center" gap={2} color="gray.600" fontSize="xs">
    <Icon as={icon} boxSize={3} color="orange.500" flexShrink={0} />
    <Text>{children}</Text>
  </Flex>
);

export default function ProjectsSection({
  limit,
  showHeading = true,
  showViewAll = false,
  bg = "white",
}) {
  const navigate = useNavigate();
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="projects">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        {showHeading && (
          <SectionHeading
            eyebrow="Our work"
            title="Projects we have delivered"
            subtitle="A selection of completed and ongoing contracts across mining, manufacturing, construction and processing."
          />
        )}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {items.map((project, index) => (
            <Flex
              key={project.title}
              direction="column"
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
              {/* Media */}
              <Box position="relative" h="200px" overflow="hidden" flexShrink={0}>
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                />

                {/* Sector tag */}
                <Text
                  position="absolute"
                  top={3}
                  left={3}
                  bg="primary.500"
                  color="white"
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  px={3}
                  py={1}
                  rounded="md"
                >
                  {project.sector}
                </Text>

                {/* Photo-count badge, only once real photos exist */}
                {project.gallery > 0 && (
                  <Flex
                    position="absolute"
                    bottom={3}
                    right={3}
                    align="center"
                    gap={1.5}
                    bg="blackAlpha.700"
                    color="white"
                    fontSize="xs"
                    px={2.5}
                    py={1}
                    rounded="md"
                  >
                    <Icon as={FaImages} boxSize={3} />
                    {project.gallery}
                  </Flex>
                )}

                {/* Play overlay appears automatically once `video` is set */}
                {project.video && (
                  <Flex
                    as="a"
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Play video: ${project.title}`}
                    position="absolute"
                    inset={0}
                    align="center"
                    justify="center"
                    bg="blackAlpha.400"
                    transition="background 0.2s"
                    _hover={{ bg: "blackAlpha.600" }}
                  >
                    <Flex
                      boxSize={14}
                      rounded="full"
                      bg="orange.500"
                      color="white"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaPlay} boxSize={5} ml={1} />
                    </Flex>
                  </Flex>
                )}
              </Box>

              {/* Body */}
              <Flex direction="column" p={{ base: 5, md: 6 }} flex="1">
                <Text fontWeight="bold" fontSize="md" color="primary.500" mb={1}>
                  {project.title}
                </Text>
                <Text fontSize="xs" color="gray.500" mb={4}>
                  {project.client}
                </Text>

                <Text
                  fontSize="sm"
                  color="gray.700"
                  lineHeight="1.7"
                  flex="1"
                  mb={5}
                >
                  {project.scope}
                </Text>

                <Flex direction="column" gap={2}>
                  <MetaRow icon={FaClock}>{project.duration}</MetaRow>
                  <MetaRow icon={FaHardHat}>{project.crew}</MetaRow>
                </Flex>

                <Flex
                  mt={4}
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.200"
                  align="center"
                  gap={2}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color="orange.500"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    {project.outcome}
                  </Text>
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
              onClick={() => navigate("/projects")}
            >
              View all projects
              <Icon as={FaArrowRight} boxSize={3} ml={2} />
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
