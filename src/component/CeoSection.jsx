import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaHardHat,
  FaQuoteLeft,
  FaSeedling,
  FaUserCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoMark from "../assets/gmologobg.png";
import "./stylings/CeoSection.css";

/*  ============================================================
 *  NEEDS THE CEO'S SIGN-OFF BEFORE THIS GOES LIVE
 *  ============================================================
 *  TODO(content): the name and job title below are the client's own - they
 *  came from the block that used to sit at the bottom of AboutSection. The
 *  letter, the tenure figure and the three principles are DRAFT copy written
 *  to fit this layout. They are words put in the mouth of a named, real
 *  person, so Mr. Osieku needs to read and approve them (ideally in writing)
 *  before publish.
 *
 *  The draft is deliberately free of anything a visitor could check and find
 *  false: no invented certifications, award names, client names, degrees or
 *  dates. The "10+" figure is the one already published in midpage.jsx, not a
 *  new claim. If he wants harder credentials in here, get them from him
 *  rather than filling the gap.
 *
 *  TODO(asset): there is no photograph of the CEO in src/assets. The portrait
 *  panel therefore renders a designed monogram instead of the stock hard-hat
 *  model that previously sat under his name - presenting a stock photo as a
 *  named executive is worse than showing no photo. To swap in the real one:
 *  drop the file in src/assets, uncomment the import below, and point
 *  CEO.photo at it. The layout is built for both cases.
 *  ============================================================ */

// import ceoPhoto from "../assets/ceo.webp";

const CEO = {
  honorific: "Mr.",
  name: "Godfrey Osieku",
  role: "Founder & Chief Executive Officer",
  photo: null, // -> ceoPhoto once a real portrait exists
  tenureValue: "10+",
  tenureLabel: "Years in industry",
  lead: "Industry does not run on promises. It runs on people who show up, do the work properly, and leave the site safer than they found it.",
  letter: [
    "I built Gmoshiektech around that idea. Too many plants in this region are asked to choose between moving fast and holding a standard, and I have never accepted that trade-off. So we made the unglamorous investments instead: technicians certified before they are deployed, equipment serviced and logged before it leaves our yard, and supervisors who pick up the phone at 6am on a Sunday.",
    "That is the whole offer. Whether the scope is an electrical retrofit, a post-shutdown deep clean, a crew of forty on site inside two weeks, or access roads kept clear through the wet season, the standard does not move with the size of the job.",
    "If our crews are on your site, you have my word behind them. I would rather lose a contract than deliver one badly.",
  ],
};

const PRINCIPLES = [
  {
    icon: FaHardHat,
    title: "Safety is the first deliverable",
    desc: "A job delivered on time but unsafely is a job we failed. Our crews work to international standards, or they do not work.",
  },
  {
    icon: FaUserCheck,
    title: "Certified hands, maintained plant",
    desc: "Every technician is certified before deployment. Every machine we hire out is serviced, logged and inspected first.",
  },
  {
    icon: FaSeedling,
    title: "Leave the site better",
    desc: "Vegetation, water and land management done so the ground still works ten years after our crews have gone.",
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

export default function CeoSection() {
  const navigate = useNavigate();

  return (
    <Box
      as="section"
      id="leadership"
      aria-labelledby="ceo-heading"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="gray.50"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="gray.200"
      py={{ base: 16, md: 24 }}
    >
      {/* Warm wash in the top-right so the band does not read as flat grey */}
      <Box
        aria-hidden="true"
        position="absolute"
        inset="0"
        pointerEvents="none"
        bgImage="radial-gradient(circle at 88% 8%, rgba(255,102,0,0.09), transparent 55%), radial-gradient(circle at 5% 95%, rgba(10,61,98,0.07), transparent 50%)"
      />

      <Box
        position="relative"
        w={{ base: "90%", md: "85%", lg: "70%" }}
        maxW="1200px"
        mx="auto"
      >
        {/* ---------- Section header ---------- */}
        <Box maxW="680px" mb={{ base: 12, md: 16 }} data-aos="fade-up">
          <Flex align="center" gap={3} mb={4}>
            <Box h="2px" w="34px" bg="orange.500" />
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="orange.500"
            >
              Leadership
            </Text>
          </Flex>
          <Heading
            as="h2"
            id="ceo-heading"
            fontSize={{ base: "2xl", md: "4xl" }}
            color="primary.500"
            lineHeight="1.2"
            mb={4}
          >
            From the founder&rsquo;s desk
          </Heading>
          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            Gmoshiektech was built by an operator, not an office. This is the
            standard we hold ourselves to, in his own words.
          </Text>
        </Box>

        {/* ---------- Portrait + letter ---------- */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 20, lg: 14 }}
          align="stretch"
        >
          {/* Portrait column */}
          <Box
            w={{ base: "100%", lg: "38%" }}
            flexShrink={0}
            position="relative"
            pb="46px" /* room for the credential card hanging off the bottom */
            data-aos="fade-up"
          >
            {/* Offset frame behind the portrait - editorial depth */}
            <Box
              aria-hidden="true"
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="20px"
              left="20px"
              w="100%"
              h="calc(100% - 46px)"
              borderWidth="2px"
              borderColor="orange.400"
              rounded="2xl"
            />

            <Box
              position="relative"
              h={{ base: "360px", md: "480px", lg: "520px" }}
              rounded="2xl"
              overflow="hidden"
              boxShadow="2xl"
              bgImage="linear-gradient(150deg, #0A3D62 0%, #083357 45%, #041a36 100%)"
            >
              {CEO.photo ? (
                <>
                  <Image
                    src={CEO.photo}
                    alt={`${CEO.honorific} ${CEO.name}, ${CEO.role} of Gmoshiektech`}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center top"
                  />
                  {/* Scrim keeps the corner brackets readable over any photo */}
                  <Box
                    aria-hidden="true"
                    position="absolute"
                    inset="0"
                    bgImage="linear-gradient(to top, rgba(4,26,54,0.55), transparent 45%)"
                  />
                </>
              ) : (
                <>
                  {/* Blueprint grid - technical-drawing cue, very low contrast */}
                  <Box
                    aria-hidden="true"
                    position="absolute"
                    inset="0"
                    bgImage="linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
                    bgSize="46px 46px"
                  />
                  <Image
                    aria-hidden="true"
                    src={logoMark}
                    alt=""
                    position="absolute"
                    bottom="-6%"
                    right="-8%"
                    w="72%"
                    opacity={0.1}
                    pointerEvents="none"
                  />
                  <Flex
                    position="relative"
                    h="100%"
                    direction="column"
                    align="center"
                    justify="center"
                    px={6}
                  >
                    <Text
                      aria-hidden="true"
                      fontSize={{ base: "6xl", md: "8xl" }}
                      fontWeight="bold"
                      color="whiteAlpha.300"
                      lineHeight="1"
                      letterSpacing="tight"
                    >
                      {initials(CEO.name)}
                    </Text>
                    <Box h="2px" w="48px" bg="orange.400" my={5} />
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      letterSpacing="widest"
                      textTransform="uppercase"
                      color="whiteAlpha.700"
                      textAlign="center"
                    >
                      Gmoshiektech &middot; Founder
                    </Text>
                  </Flex>
                </>
              )}

              {/* Corner brackets */}
              <Box
                aria-hidden="true"
                position="absolute"
                top="18px"
                left="18px"
                boxSize="42px"
                borderTopWidth="3px"
                borderLeftWidth="3px"
                borderColor="orange.400"
                roundedTopLeft="md"
              />
              <Box
                aria-hidden="true"
                position="absolute"
                bottom="18px"
                right="18px"
                boxSize="42px"
                borderBottomWidth="3px"
                borderRightWidth="3px"
                borderColor="orange.400"
                roundedBottomRight="md"
              />

              <Box aria-hidden="true" className="ceo-portrait__sheen" />
            </Box>

            {/* Credential card, overlapping the portrait */}
            <Flex
              position="absolute"
              bottom="0"
              left={{ base: "5%", lg: "-24px" }}
              right={{ base: "5%", lg: "36px" }}
              bg="white"
              rounded="xl"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="gray.200"
              borderLeftWidth="3px"
              borderLeftColor="orange.500"
              px={5}
              py={4}
              align="center"
              justify="space-between"
              gap={4}
            >
              <Box minW={0}>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "sm", md: "md" }}
                  color="primary.500"
                  lineHeight="1.3"
                >
                  {CEO.honorific} {CEO.name}
                </Text>
                <Text
                  fontSize="10px"
                  fontWeight="bold"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="gray.500"
                  mt={1}
                >
                  {CEO.role}
                </Text>
              </Box>
              <Box
                textAlign="right"
                flexShrink={0}
                pl={4}
                borderLeftWidth="1px"
                borderColor="gray.200"
              >
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="orange.500"
                  lineHeight="1"
                >
                  {CEO.tenureValue}
                </Text>
                <Text fontSize="10px" color="gray.500" mt={1}>
                  {CEO.tenureLabel}
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Letter column */}
          <Box
            as="blockquote"
            flex="1"
            position="relative"
            bg="white"
            rounded="2xl"
            borderWidth="1px"
            borderColor="gray.200"
            borderTopWidth="4px"
            borderTopColor="orange.500"
            boxShadow="sm"
            px={{ base: 6, md: 10 }}
            pt={{ base: 8, md: 10 }}
            pb={{ base: 7, md: 9 }}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <Icon
              as={FaQuoteLeft}
              aria-hidden="true"
              boxSize={{ base: 7, md: 9 }}
              color="orange.400"
              opacity={0.3}
              mb={5}
            />

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              color="primary.500"
              lineHeight="1.65"
              mb={6}
            >
              {CEO.lead}
            </Text>

            {CEO.letter.map((paragraph, index) => (
              <Text
                key={index}
                color="gray.700"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.9"
                mb={index === CEO.letter.length - 1 ? 0 : 4}
              >
                {paragraph}
              </Text>
            ))}

            <Box h="1px" bg="gray.200" my={7} />

            {/* Signature block */}
            <Flex
              direction={{ base: "column", sm: "row" }}
              align={{ base: "flex-start", sm: "flex-end" }}
              justify="space-between"
              gap={6}
            >
              <Box>
                <Text
                  className="ceo-signature"
                  aria-hidden="true"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="primary.500"
                  lineHeight="1.1"
                  mb={2}
                >
                  {CEO.name}
                </Text>
                <Box h="1px" w="120px" bg="orange.500" mb={3} />
                <Text
                  as="cite"
                  display="block"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="sm"
                  color="gray.900"
                >
                  {CEO.honorific} {CEO.name}
                </Text>
                <Text fontSize="xs" color="gray.600" mt={1}>
                  {CEO.role}, Gmoshiektech
                </Text>
              </Box>

              <Flex
                direction={{ base: "column", sm: "row" }}
                align={{ base: "stretch", sm: "center" }}
                gap={3}
                flexShrink={0}
              >
                <Button
                  bg="orange.400"
                  color="white"
                  _hover={{ bg: "orange.500", transform: "translateY(-2px)" }}
                  transition="background 0.2s, transform 0.2s"
                  onClick={() => navigate("/contact")}
                >
                  Talk to our team
                </Button>
                <Button
                  variant="outline"
                  color="primary.500"
                  borderColor="primary.200"
                  _hover={{ bg: "primary.50", borderColor: "primary.500" }}
                  onClick={() => navigate("/services")}
                >
                  What we do
                  <Icon as={FaArrowRight} aria-hidden="true" boxSize={3} />
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        {/* ---------- Leadership principles ---------- */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: 5, md: 6 }}
          mt={{ base: 14, lg: 20 }}
        >
          {PRINCIPLES.map((principle, index) => (
            <Flex
              key={principle.title}
              direction="column"
              bg="white"
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={{ base: 6, md: 7 }}
              transition="transform 0.25s, box-shadow 0.25s, border-color 0.25s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
                borderColor: "orange.200",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <Flex
                boxSize="48px"
                mb={5}
                rounded="lg"
                bg="orange.50"
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon
                  as={principle.icon}
                  aria-hidden="true"
                  boxSize={6}
                  color="orange.500"
                />
              </Flex>
              <Heading
                as="h3"
                fontSize={{ base: "md", md: "lg" }}
                color="primary.500"
                lineHeight="1.35"
                mb={3}
              >
                {principle.title}
              </Heading>
              <Text
                color="gray.600"
                fontSize={{ base: "sm", md: "sm" }}
                lineHeight="1.8"
              >
                {principle.desc}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
