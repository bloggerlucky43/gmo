import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaAward, FaIndustry, FaTools } from "react-icons/fa";
import founderPhoto from "../assets/founder/founder-portrait.webp";
import { COMPANY_NAME, LEGAL_NAME } from "../config/contact";
import SectionHeading from "./SectionHeading";

/*  ============================================================
 *  IN MEMORIAM - THE FOUNDER
 *  ============================================================
 *  Corrected 2026-09-05: the portrait CeoSection.jsx publishes is the
 *  Managing Director, not the founder. The founder is the late
 *  Godfrey Momodu Oshieku, whom the registered name
 *  ("Godfrey M. Oshieku Technical Nigeria LTD") is named for. This
 *  section exists so the site attributes the company to the right man.
 *
 *  THE TWO NAMES DIFFER BY ONE WORD - middle name only:
 *
 *    Godfrey MOMODU Oshieku  - the late founder      (this file)
 *    Godfrey MOSES  Oshieku  - the Managing Director  (CeoSection.jsx)
 *
 *  Always render both in full. "Godfrey M. Oshieku" is ambiguous between them
 *  and both men appear on the same page, so the middle name is the only thing
 *  distinguishing the founder from the MD. Do not abbreviate it here.
 *
 *  TODO(content): every fact below came from the owner verbally and is
 *  all we were given - 25 years as mechanical staff at Lafarge Cement
 *  Plc, then recalled as a contractor on the strength of that record.
 *  Not given, and so not published: birth/death years, hometown, or any
 *  title beyond "Founder". If the family wants dates on the memorial
 *  line, add them to FOUNDER.lifespan and they will render under the
 *  name. Nothing here is invented.
 *
 *  The portrait is a phone photograph of a framed print, so it carries
 *  the canvas weave and a heavy colour cast from the original. It has
 *  been cropped off the CamScanner screenshot (status bar, app chrome and
 *  filter strip removed in pixels), white-balanced off the agbada and
 *  desaturated - see src/assets/founder/ for the untouched originals.
 *  It tops out at 720x960; do not scale the panel much past what is
 *  rendered here. If the family produces a better print, drop it in and
 *  point the import at it.
 *  ============================================================ */

const FOUNDER = {
  honorific: "Mr.",
  name: "Godfrey Momodu Oshieku",
  role: "Founder",
  photo: founderPhoto,
  /* Face sits high in this crop and the bottom is taken by the scrim, so
   * bias the cover-crop upward. */
  photoPosition: "center 22%",
  lifespan: null,
  tribute: [
    `${LEGAL_NAME} carries the name of the man who made it possible. Mr. Godfrey Momodu Oshieku spent 25 years as mechanical staff with Lafarge Cement Plc - a working life on the plant floor, among the mills, kilns and conveyors that a cement works lives or dies by.`,
    "That kind of service is not recorded in a certificate. It is recorded in the fact that after he had served his years, Lafarge called him back to continue the same work as a contractor. A company does not recall a man it has already released unless his hands were the ones it trusted.",
    `The standard he set on that plant floor is the one ${COMPANY_NAME} still works to. He has passed on, but the discipline, the commitment and the name are his.`,
  ],
  legacy: [
    {
      icon: FaIndustry,
      label: "25 years",
      desc: "Mechanical staff, Lafarge Cement Plc",
    },
    {
      icon: FaAward,
      label: "Recalled to serve",
      desc: "Invited back as a contractor on the strength of his record",
    },
    {
      icon: FaTools,
      label: "The standard",
      desc: "The plant-floor discipline this company was built on",
    },
  ],
};

export default function FounderSection() {
  return (
    <Box
      as="section"
      id="founder"
      aria-label="In memory of our founder"
      w="100%"
      position="relative"
      overflow="hidden"
      /* Deep navy so this reads as a memorial plate rather than another
       * content band - it is the one dark section on the page. */
      bgImage="linear-gradient(160deg, #0A3D62 0%, #082f4d 50%, #041a36 100%)"
      py={{ base: 16, md: 24 }}
    >
      <Box
        aria-hidden="true"
        position="absolute"
        inset="0"
        pointerEvents="none"
        bgImage="radial-gradient(circle at 90% 10%, rgba(255,102,0,0.14), transparent 55%)"
      />

      <Box
        position="relative"
        w={{ base: "90%", md: "85%", lg: "70%" }}
        mx="auto"
      >
        {/* Light palette: this is the one section on a dark ground, so the
            default navy heading and gray.600 subtitle would sink into it. */}
        <SectionHeading
          eyebrow="In memoriam"
          title="The man the company is named for"
          subtitle="Before there was a company, there was a mechanic on a cement plant floor. Twenty-five years of it."
          align="center"
          maxW="720px"
          mb={{ base: 12, md: 16 }}
          eyebrowColor="orange.300"
          titleColor="white"
          subtitleColor="whiteAlpha.800"
        />

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 14 }}
          align={{ base: "stretch", lg: "center" }}
        >
          {/* ---------- Portrait ---------- */}
          <Box
            w={{ base: "100%", md: "340px", lg: "34%" }}
            maxW="100%"
            mx={{ base: "auto", lg: 0 }}
            flexShrink={0}
            position="relative"
            data-aos="fade-up"
          >
            <Box
              aria-hidden="true"
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="18px"
              left="18px"
              w="100%"
              h="100%"
              borderWidth="2px"
              borderColor="orange.400"
              rounded="2xl"
            />

            <Box
              position="relative"
              h={{ base: "400px", md: "460px" }}
              rounded="2xl"
              overflow="hidden"
              boxShadow="2xl"
              bg="#041a36"
            >
              <Image
                src={FOUNDER.photo}
                alt={`${FOUNDER.honorific} ${FOUNDER.name}, ${FOUNDER.role} of ${COMPANY_NAME}`}
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition={FOUNDER.photoPosition}
              />
              {/* Keeps the name plate readable over the photo */}
              <Box
                aria-hidden="true"
                position="absolute"
                inset="0"
                bgImage="linear-gradient(to top, rgba(4,26,54,0.92), rgba(4,26,54,0.4) 32%, transparent 62%)"
              />

              {/* Name plate, inset over the scrim */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                px={6}
                pb={6}
                pt={10}
              >
                <Box h="2px" w="44px" bg="orange.400" mb={4} />
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "lg", md: "xl" }}
                  color="white"
                  lineHeight="1.25"
                >
                  {FOUNDER.honorific} {FOUNDER.name}
                </Text>
                <Text
                  fontSize="11px"
                  fontWeight="bold"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="orange.200"
                  mt={2}
                >
                  {FOUNDER.role}
                  {FOUNDER.lifespan ? ` · ${FOUNDER.lifespan}` : ""}
                </Text>
              </Box>

              <Box
                aria-hidden="true"
                position="absolute"
                top="16px"
                left="16px"
                boxSize="38px"
                borderTopWidth="3px"
                borderLeftWidth="3px"
                borderColor="orange.400"
                roundedTopLeft="md"
              />
            </Box>
          </Box>

          {/* ---------- Tribute ---------- */}
          <Box flex="1" data-aos="fade-up" data-aos-delay="120">
            {/* whiteAlpha on this navy lands around 8:1 - readable, but the
                lead paragraph stays solid white so it carries the section. */}
            {FOUNDER.tribute.map((paragraph, index) => (
              <Text
                key={index}
                color={index === 0 ? "white" : "whiteAlpha.900"}
                fontSize={
                  index === 0
                    ? { base: "md", md: "lg" }
                    : { base: "sm", md: "md" }
                }
                fontWeight={index === 0 ? "medium" : "normal"}
                lineHeight={index === 0 ? "1.7" : "1.9"}
                mb={index === FOUNDER.tribute.length - 1 ? 0 : 5}
              >
                {paragraph}
              </Text>
            ))}

            <Box h="1px" bg="whiteAlpha.300" my={{ base: 8, md: 9 }} />

            <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 6, sm: 8 }}>
              {FOUNDER.legacy.map((item) => (
                <Flex key={item.label} flex="1" gap={3} align="flex-start">
                  <Flex
                    boxSize="38px"
                    rounded="lg"
                    bg="whiteAlpha.200"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon
                      as={item.icon}
                      aria-hidden="true"
                      boxSize={4}
                      color="orange.300"
                    />
                  </Flex>
                  <Box minW={0}>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="white"
                      lineHeight="1.3"
                    >
                      {item.label}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="whiteAlpha.800"
                      lineHeight="1.6"
                      mt={1}
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
