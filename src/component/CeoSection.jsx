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
  FaTools,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoMark from "../assets/gmologobg.png";
import ceoPhoto from "../assets/ceo/ceo-portrait-2026.webp";
import {
  COMPANY_NAME,
  LEGAL_NAME,
  SLOGAN,
  yearsInIndustryLabel,
} from "../config/contact";
import SectionHeading from "./SectionHeading";
import "./stylings/CeoSection.css";

/*  ============================================================
 *  NEEDS THE CEO'S SIGN-OFF BEFORE THIS GOES LIVE
 *  ============================================================
 *  TODO(content): every factual claim in the letter below is taken from the
 *  company profile document in src/assets - the 2005 founding date, the
 *  service list, the "Breaking Limits" vision, the lean core team, and the
 *  LafargeHolcim Africa Plc shutdown / stock audit / vegetation control
 *  engagement listed there as the company's key achievement. Nothing is
 *  invented: no certifications, awards, degrees or client names beyond that
 *  one, and no numbers the company does not already publish.
 *
 *  The VOICE, though, is drafted - these are first-person words put in the
 *  mouth of a named, real person. Mr. Oshieku needs to read and approve them
 *  (ideally in writing) before publish, and the LafargeHolcim mention should
 *  be checked against whatever the contract says about using their name in
 *  marketing.
 *
 *  TODO(owner): the profile document spells the surname "Oshieku" (which the
 *  oshiektech4@ address agrees with); this component had been publishing
 *  "Osieku", with no h. Confirm the spelling of his own name before publish -
 *  it is the one error on the page nobody will forgive.
 *
 *  The portrait is the founder's own photograph, cropped from
 *  src/assets/ceo/. Three are prepared:
 *
 *    ceo-portrait-2026.webp   Used, on the client's instruction. Seated
 *                             head-and-torso indoors. Cropped from a WhatsApp
 *                             status screenshot, so the phone status bar, the
 *                             "My status" header, the status caption, the view
 *                             counter and the nav bar have all been cut away in
 *                             pixels rather than hidden with CSS. If you ever
 *                             re-crop from the original in src/pictures/ceonew/,
 *                             check all four edges again. 604x687 - the
 *                             smallest source of the three. Note he is wearing
 *                             a face mask pulled down to his chin.
 *    ceo-portrait.webp        on site in full PPE, cement plant behind him.
 *                             The only one that shows the work, and the only one
 *                             that lines up with the LafargeHolcim record cited
 *                             in the letter. Point the import back here if a
 *                             work portrait is wanted again.
 *    ceo-portrait-posed.webp  posed head-and-torso against rock.
 *
 *  All three are cropped off phone-camera originals, so they top out around
 *  650px wide - fine at the size rendered here, but do not scale the panel up
 *  much without a better source. If a proper studio portrait is ever taken, drop
 *  it in and point the import at it; the layout also still handles photo: null
 *  by falling back to a designed monogram panel.
 *  ============================================================ */

const CEO = {
  honorific: "Mr.",
  name: "Godfrey M. Oshieku",
  role: "Founder & Chief Executive Officer",
  photo: ceoPhoto,
  // Cover-crops on a box whose aspect changes with the viewport, so bias the
  // framing upward - his face sits about 28% down this crop, and the bottom of
  // the panel is taken by the scrim and, at lg, the credential card.
  photoPosition: "center 25%",
  tenureValue: yearsInIndustryLabel(),
  tenureLabel: "Years in industry",
  lead: `${SLOGAN} is not a line we picked for a brochure. It is what a contractor working out of Ewekoro has had to do since 2005 - with the work, with the standard, and with what people assume we are capable of.`,
  letter: [
    `I registered ${LEGAL_NAME} to do the technical work that keeps plants running: electrical and mechanical installation, civil jobs, shutdown support, vegetation control and the rehabilitation of mining ground. ${yearsInIndustryLabel()} years on, the scope has widened but the test has not changed. Does the plant come back up on schedule, and does it come back up safely?`,
    "Our shutdown services, periodic stock audit and vegetation control for LafargeHolcim Africa Plc is the record I would point a new client to. Not because it was the largest contract, but because shutdown work is judged on the clock. The plant is down and losing money from the hour you start, so you are given a fixed window to work in - and the only question at the end of it is whether production is running again.",
    "We are a lean core team, backed by a dedicated workforce we mobilise to the size of the job. That is deliberate. It means the people on your site answer to us, and it means when you call this company you are never far from me.",
  ],
};

/* Drawn from the "Why Choose Us" list in the company profile document rather
 * than written fresh, so the claims here match what the company already puts
 * in front of clients on paper. */
const PRINCIPLES = [
  {
    icon: FaHardHat,
    title: "Health and safety, our core value",
    desc: "A strong commitment to safety and quality standards on every site we enter. A job delivered on time but unsafely is a job we failed.",
  },
  {
    icon: FaTools,
    title: "Built for the shutdown window",
    desc: "Reliable support for industrial shutdown operations - planned to the window you set, staffed properly, and handed back when we said we would.",
  },
  {
    icon: FaSeedling,
    title: "Ground left fit for use",
    desc: "Rehabilitation of mining areas, vegetation control, pond and lake management and tree planting, so the land still works long after our crews have gone.",
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
      aria-label="Message from the founder"
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
        mx="auto"
      >
        <SectionHeading
          eyebrow="Leadership"
          title="From the founder's desk"
          subtitle={`${COMPANY_NAME} was built by an operator, not an office. This is the standard we hold ourselves to, in his own words.`}
        />

        {/* ---------- Portrait + letter ---------- */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 20, lg: 14 }}
          align="stretch"
        >
          {/* Portrait column */}
          <Box
            /* Capped at md: the photo is a 648x884 portrait, so letting this
             * column run the full single-column width would cover-crop it to a
             * letterbox band and cut his face off. */
            w={{ base: "100%", md: "460px", lg: "38%" }}
            maxW="100%"
            mx={{ base: 0, md: "auto", lg: 0 }}
            flexShrink={0}
            position="relative"
            /* Below lg the credential card hangs off the bottom edge and needs
             * reserved space; at lg it moves inside the photo, so drop it. */
            pb={{ base: "46px", lg: 0 }}
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
              /* Match the photo box, not the column: below lg the column is
               * taller than the photo by the card's reserved space. */
              h={{ md: "calc(100% - 46px)", lg: "100%" }}
              borderWidth="2px"
              borderColor="orange.400"
              rounded="2xl"
            />

            <Box
              position="relative"
              h={{ base: "360px", md: "540px", lg: "520px" }}
              rounded="2xl"
              overflow="hidden"
              boxShadow="2xl"
              bgImage="linear-gradient(150deg, #0A3D62 0%, #083357 45%, #041a36 100%)"
            >
              {CEO.photo ? (
                <>
                  <Image
                    src={CEO.photo}
                    alt={`${CEO.honorific} ${CEO.name}, ${CEO.role} of ${COMPANY_NAME}`}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition={CEO.photoPosition}
                  />
                  {/* Scrim does two jobs: keeps the corner brackets readable
                      over any photo, and at lg gives the credential card a
                      graded ground to sit on instead of bare photo. */}
                  <Box
                    aria-hidden="true"
                    position="absolute"
                    inset="0"
                    bgImage="linear-gradient(to top, rgba(4,26,54,0.72), rgba(4,26,54,0.35) 28%, transparent 58%)"
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
                      {COMPANY_NAME} &middot; Founder
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
                /* At lg the credential card occupies the bottom of the photo,
                 * so this crop mark lifts clear of it. 120px clears the card
                 * at its tallest (role wrapping to two lines). */
                bottom={{ base: "18px", lg: "120px" }}
                right="18px"
                boxSize="42px"
                borderBottomWidth="3px"
                borderRightWidth="3px"
                borderColor="orange.400"
                roundedBottomRight="md"
              />

              <Box aria-hidden="true" className="ceo-portrait__sheen" />
            </Box>

            {/* Credential card. Below lg it hangs off the bottom edge of the
                portrait; at lg it sits inset inside the photo, over the scrim. */}
            <Flex
              position="absolute"
              bottom={{ base: "0", lg: "18px" }}
              left={{ base: "5%", lg: "18px" }}
              right={{ base: "5%", lg: "18px" }}
              bg="white"
              rounded="xl"
              boxShadow={{ base: "lg", lg: "xl" }}
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
                  {CEO.role}, {COMPANY_NAME}
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
                  <Icon
                    as={FaArrowRight}
                    aria-hidden="true"
                    boxSize={3}
                    ml={2}
                  />
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
