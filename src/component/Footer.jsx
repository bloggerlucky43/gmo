import { Box, Text, Flex, Heading, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
  FaPhone,
  FaTwitter,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import gmologo from "../assets/gmologobg.png";
import { Link as RouterLink } from "react-router-dom";
import {
  ADDRESS,
  PHONES,
  EMAIL,
  LEGAL_NAME,
  RC_NUMBER,
  SOCIAL_URLS,
  telHref,
  mapsHref,
  whatsappHref,
} from "../config/contact";
import { SERVICE_NAMES } from "../config/services";

const whatsappLink = whatsappHref();

/* Social links come from src/config/contact.js. Entries with an empty URL are
 * filtered out, so the footer never renders a dead link. */
const SOCIALS = [
  { label: "WhatsApp", icon: FaWhatsapp, href: whatsappLink },
  { label: "Facebook", icon: FaFacebook, href: SOCIAL_URLS.facebook },
  { label: "Instagram", icon: FaInstagram, href: SOCIAL_URLS.instagram },
  { label: "LinkedIn", icon: FaLinkedin, href: SOCIAL_URLS.linkedin },
  { label: "X (Twitter)", icon: FaTwitter, href: SOCIAL_URLS.twitter },
].filter((social) => social.href);

const COMPANY_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Equipment & Fleet", to: "/equipment" },
  { label: "Testimonials", to: "/testimonial" },
  { label: "Work With Us", to: "/careers" },
  { label: "Request a Quote", to: "/quote" },
  { label: "Contact", to: "/contact" },
];

/* Derived from src/config/services.js so the footer can never list a service the
 * company has stopped offering, or miss one it has added. */
const SERVICE_LINKS = SERVICE_NAMES;

/* Shared link styling so hover and keyboard focus behave consistently. */
const linkStyles = {
  color: "whiteAlpha.800",
  fontSize: "sm",
  transition: "color 0.2s",
  _hover: { color: "orange.400" },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "orange.400",
    outlineOffset: "2px",
  },
};

const ColumnHeading = ({ children }) => (
  <Heading
    as="h3"
    fontSize={{ base: "md", md: "lg" }}
    color="white"
    pb={4}
    mb={5}
    borderBottom="solid 2px"
    borderColor="orange.500"
  >
    {children}
  </Heading>
);

export default function Footer() {
  return (
    <Box as="footer" bg="primary.500" mt={{ base: 20, md: 28 }}>
      {/* Actionable contact strip. A negative top margin lifts it over the
          preceding section, replacing the old translateY(-180px) + 30vh hack
          that left a large dead gap. */}
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        gap={{ base: 5, lg: 8 }}
        bg="orange.500"
        w={{ base: "88%", md: "80%", lg: "70%" }}
        mx="auto"
        mt={{ base: -10, md: -14 }}
        py={6}
        px={{ base: 5, md: 6 }}
        borderRadius="lg"
        boxShadow="lg"
        data-aos="fade-up"
      >
        <Flex
          as="a"
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          align="center"
          gap={4}
          color="whiteAlpha.900"
          transition="opacity 0.2s"
          _hover={{ opacity: 0.85 }}
        >
          <Icon as={FaMapMarkerAlt} boxSize={7} flexShrink={0} />
          <Box>
            <Heading fontSize={{ base: "sm", md: "md" }}>
              Company Address
            </Heading>
            <Text fontSize="sm" mt={1}>
              {ADDRESS}
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={4} color="whiteAlpha.900">
          <Icon as={FaPhone} boxSize={7} flexShrink={0} />
          <Box>
            <Heading fontSize={{ base: "sm", md: "md" }}>Call Us</Heading>
            <Flex direction="column" mt={1}>
              {PHONES.map((phone) => (
                <Box
                  as="a"
                  key={phone}
                  href={telHref(phone)}
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  {phone}
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>

        <Flex align="center" gap={4} color="whiteAlpha.900">
          <Icon as={FaEnvelope} boxSize={7} flexShrink={0} />
          <Box minW={0}>
            <Heading fontSize={{ base: "sm", md: "md" }}>Email Us</Heading>
            <Box
              as="a"
              href={`mailto:${EMAIL}`}
              fontSize="sm"
              mt={1}
              display="block"
              wordBreak="break-word"
              _hover={{ textDecoration: "underline" }}
            >
              {EMAIL}
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>

      {/* Main footer columns */}
      <Box
        w={{ base: "88%", md: "85%", lg: "70%" }}
        mx="auto"
        pt={{ base: 12, md: 16 }}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 10, md: 8 }}>
          {/* Brand */}
          <Box>
            <Image
              src={gmologo}
              alt="GMO Technic Ltd"
              w="120px"
              h="auto"
              mb={4}
            />
            <Text color="whiteAlpha.800" fontSize="sm" lineHeight="1.7">
              A trusted Nigerian general contracting company delivering
              technical, engineering and industrial support services with a focus
              on safety, professionalism and reliability.
            </Text>

            {/* Registered identity - tender and procurement teams look for it. */}
            <Box
              mt={5}
              pt={4}
              borderTopWidth="1px"
              borderColor="whiteAlpha.300"
            >
              <Text color="whiteAlpha.900" fontSize="xs" lineHeight="1.6">
                {LEGAL_NAME}
              </Text>
              <Text color="whiteAlpha.700" fontSize="xs" mt={1}>
                RC {RC_NUMBER}
              </Text>
            </Box>

            {SOCIALS.length > 0 && (
              <Flex gap={3} mt={6}>
                {SOCIALS.map(({ label, icon, href }) => (
                  <Flex
                    as="a"
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    boxSize={10}
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="whiteAlpha.200"
                    color="white"
                    transition="background 0.2s"
                    _hover={{ bg: "orange.500" }}
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "orange.400",
                      outlineOffset: "2px",
                    }}
                  >
                    <Icon as={icon} boxSize={5} />
                  </Flex>
                ))}
              </Flex>
            )}
          </Box>

          {/* Company */}
          <Box>
            <ColumnHeading>Company</ColumnHeading>
            <Flex direction="column" gap={3}>
              {COMPANY_LINKS.map(({ label, to }) => (
                <Flex key={to} align="center" gap={2}>
                  <Icon
                    as={FaLongArrowAltRight}
                    boxSize={3}
                    color="orange.400"
                    flexShrink={0}
                  />
                  <Box asChild {...linkStyles}>
                    <RouterLink to={to}>{label}</RouterLink>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>

          {/* Services */}
          <Box>
            <ColumnHeading>Services</ColumnHeading>
            <Flex direction="column" gap={3}>
              {SERVICE_LINKS.map((label) => (
                <Flex key={label} align="center" gap={2}>
                  <Icon
                    as={FaLongArrowAltRight}
                    boxSize={3}
                    color="orange.400"
                    flexShrink={0}
                  />
                  <Box asChild {...linkStyles}>
                    <RouterLink to="/services">{label}</RouterLink>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>

          {/* Get in touch */}
          <Box>
            <ColumnHeading>Get In Touch</ColumnHeading>
            <Flex direction="column" gap={4}>
              <Flex
                as="a"
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                gap={3}
                {...linkStyles}
              >
                <Icon
                  as={FaMapMarkerAlt}
                  boxSize={4}
                  color="orange.400"
                  mt={1}
                  flexShrink={0}
                />
                <Text fontSize="sm">{ADDRESS}</Text>
              </Flex>

              {PHONES.map((phone) => (
                <Flex
                  as="a"
                  key={phone}
                  href={telHref(phone)}
                  gap={3}
                  align="center"
                  {...linkStyles}
                >
                  <Icon
                    as={FaPhone}
                    boxSize={4}
                    color="orange.400"
                    flexShrink={0}
                  />
                  <Text fontSize="sm">{phone}</Text>
                </Flex>
              ))}

              <Flex
                as="a"
                href={`mailto:${EMAIL}`}
                gap={3}
                align="center"
                {...linkStyles}
              >
                <Icon
                  as={FaEnvelope}
                  boxSize={4}
                  color="orange.400"
                  flexShrink={0}
                />
                <Text fontSize="sm" wordBreak="break-word">
                  {EMAIL}
                </Text>
              </Flex>

              {/* Primary WhatsApp call to action */}
              <Flex
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                align="center"
                justify="center"
                gap={2}
                mt={2}
                py={3}
                px={4}
                borderRadius="md"
                bg="#25D366"
                color="white"
                fontWeight="bold"
                fontSize="sm"
                transition="filter 0.2s"
                _hover={{ filter: "brightness(0.92)" }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "white",
                  outlineOffset: "2px",
                }}
              >
                <Icon as={FaWhatsapp} boxSize={5} />
                Chat on WhatsApp
              </Flex>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Bottom bar */}
      <Flex
        bg="primary.400"
        color="whiteAlpha.900"
        justify="center"
        py={{ base: 4, md: 5 }}
        mt={{ base: 12, md: 16 }}
        px={4}
      >
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          textAlign="center"
          fontWeight="semibold"
        >
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Box as="span" color="orange.400">
            Gmotechnigltd
          </Box>
          . Designed by{" "}
          <Box
            as="a"
            href="https://altechdev.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            color="orange.400"
            _hover={{ textDecoration: "underline" }}
          >
            Altechdev
          </Box>
        </Text>
      </Flex>
    </Box>
  );
}
