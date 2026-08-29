import { useCallback, useEffect, useState } from "react";
import { Box, Flex, Text, SimpleGrid, Icon, Image } from "@chakra-ui/react";
import {
  FaCertificate,
  FaHardHat,
  FaSolarPanel,
  FaBuilding,
  FaFileInvoiceDollar,
  FaIdCard,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

import isoLeadAuditor from "../assets/award/iso-9001-lead-auditor.webp";
import hseLevel3 from "../assets/award/hse-level-3.webp";
import hseLevel2 from "../assets/award/hse-level-2.webp";
import hseLevel1 from "../assets/award/hse-level-1.webp";
import solarPv from "../assets/award/solar-pv-installation.webp";
import cacIncorporation from "../assets/award/cac-incorporation.webp";
import vatRegistration from "../assets/award/vat-registration.webp";

/*  ============================================================
 *  REAL CONTENT - transcribed from the scanned documents in
 *  src/assets/award/ (originals kept there as PDFs).
 *  ============================================================
 *  Every field below is copied off the certificate itself. Two
 *  things to keep honest if this section is edited later:
 *
 *  1. The ISO 9001:2015 entry is a PERSONNEL certificate - lead
 *     auditor training held by the MD. It is not a company-level
 *     ISO 9001 certification, and the copy must not imply one.
 *  ============================================================ */
const CERTIFICATES = [
  {
    title: "ISO 9001:2015 Lead Auditor",
    issuer: "Inter Continental Assessments (UKA-AB)",
    year: "2022",
    holder: "Engr. Godfrey Moses",
    note: "Lead auditor training in quality management systems. Certificate no. PC2400115.",
    icon: FaCertificate,
    image: isoLeadAuditor,
  },
  {
    title: "HSE Level 3",
    issuer: "Onshore & Offshore Safety Institute of Nigeria",
    year: "2026",
    holder: "Godfrey Alloye Moses",
    note: "96 hours covering permit to work, confined space entry, journey management and survival at sea.",
    icon: FaHardHat,
    image: hseLevel3,
  },
  {
    title: "HSE Level 2",
    issuer: "Onshore & Offshore Safety Institute of Nigeria",
    year: "2026",
    holder: "Godfrey Alloye Moses",
    note: "96 hours covering hazard identification, working at height, accident investigation and fire safety.",
    icon: FaHardHat,
    image: hseLevel2,
  },
  {
    title: "HSE Level 1",
    issuer: "Onshore & Offshore Safety Institute of Nigeria",
    year: "2026",
    holder: "Godfrey Alloye Moses",
    note: "96 hours covering HSE management systems, PPE, job safety analysis, first aid and CPR.",
    icon: FaHardHat,
    image: hseLevel1,
  },
  {
    title: "Solar Photovoltaic Installation",
    issuer: "Ashdam Solar Academy",
    year: "2025",
    holder: "Godfrey Moses",
    note: "Practical solar PV installation course. Reference MCH/072025/AS/09.",
    icon: FaSolarPanel,
    image: solarPv,
  },
  {
    title: "Certificate of Incorporation",
    issuer: "Corporate Affairs Commission",
    year: "2005",
    holder: "Godfrey M. Oshieku Technical Nigeria Limited",
    note: "Incorporated as a limited liability company under RC 636308.",
    icon: FaBuilding,
    image: cacIncorporation,
  },
  {
    title: "VAT Registration",
    issuer: "Federal Inland Revenue Service",
    year: "2005",
    holder: "Godfrey M. Oshieku Technical Nigeria Limited",
    note: "Registered agent for VAT collection. VAT no. OTV100026363308.",
    icon: FaFileInvoiceDollar,
    image: vatRegistration,
  },
];

/*  Full-screen viewer for a single certificate scan. Closes on the
 *  backdrop, the close button, or Escape, and locks page scroll while
 *  open so the grid behind it does not move under the overlay.  */
function CertificateViewer({ item, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <Flex
      position="fixed"
      inset={0}
      zIndex={1400}
      bg="blackAlpha.800"
      align="center"
      justify="center"
      direction="column"
      gap={4}
      p={{ base: 4, md: 8 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} certificate`}
    >
      <Box
        as="button"
        type="button"
        onClick={onClose}
        aria-label="Close certificate"
        position="absolute"
        top={{ base: 3, md: 5 }}
        right={{ base: 3, md: 5 }}
        color="white"
        bg="whiteAlpha.200"
        rounded="full"
        p={3}
        lineHeight={0}
        _hover={{ bg: "whiteAlpha.400" }}
      >
        <Icon as={FaTimes} boxSize={4} />
      </Box>

      <Image
        src={item.image}
        alt={`${item.title} issued by ${item.issuer}`}
        maxH="82vh"
        maxW="100%"
        objectFit="contain"
        rounded="md"
        bg="white"
        onClick={(event) => event.stopPropagation()}
      />

      <Box textAlign="center" color="white" maxW="640px">
        <Text fontWeight="bold">{item.title}</Text>
        <Text fontSize="sm" color="whiteAlpha.800">
          {item.issuer} &middot; {item.year} &middot; {item.holder}
        </Text>
      </Box>
    </Flex>
  );
}

export default function AwardsSection({ bg = "gray.50" }) {
  const [active, setActive] = useState(null);
  const closeViewer = useCallback(() => setActive(null), []);

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="awards">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & registrations"
          subtitle="Our statutory registrations and the safety and quality training behind the work. Tap any document to read the certificate in full."
          align="center"
        />

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 6, md: 8 }}>
          {CERTIFICATES.map((item, index) => (
            <Flex
              key={item.title}
              as="button"
              type="button"
              onClick={() => setActive(item)}
              aria-label={`View the ${item.title} certificate`}
              direction="column"
              align="center"
              textAlign="center"
              bg="white"
              p={{ base: 5, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              borderTopWidth="3px"
              borderTopColor="orange.500"
              boxShadow="sm"
              transition="transform 0.25s, box-shadow 0.25s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <Box
                position="relative"
                w="100%"
                h="130px"
                mb={5}
                rounded="md"
                overflow="hidden"
                borderWidth="1px"
                borderColor="gray.200"
                bg="gray.50"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} issued by ${item.issuer}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="top"
                  loading="lazy"
                />
                <Flex
                  position="absolute"
                  bottom={1.5}
                  right={1.5}
                  align="center"
                  gap={1}
                  bg="blackAlpha.700"
                  color="white"
                  px={2}
                  py={1}
                  rounded="sm"
                  fontSize="10px"
                  fontWeight="semibold"
                >
                  <Icon as={FaSearchPlus} boxSize={2.5} />
                  View
                </Flex>
              </Box>

              <Flex align="center" gap={2} mb={2}>
                <Icon as={item.icon} boxSize={3} color="orange.500" />
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="orange.500"
                  letterSpacing="wider"
                >
                  {item.year}
                </Text>
              </Flex>

              <Text fontWeight="bold" fontSize="md" color="primary.500" mb={1}>
                {item.title}
              </Text>

              <Text fontSize="xs" color="gray.500" mb={3}>
                {item.issuer}
              </Text>

              <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                {item.note}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {active && <CertificateViewer item={active} onClose={closeViewer} />}
    </Box>
  );
}
