import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaHardHat,
  FaGraduationCap,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { whatsappHref, mailtoHref } from "../config/contact";

/* TODO(content): confirm these are the trades GMO actually recruits for, and
 * add or remove as hiring needs change. */
const TRADES = [
  "Industrial Electrician",
  "Mechanical Fitter",
  "Plant / Machine Operator",
  "Welder / Fabricator",
  "Industrial Cleaner",
  "Site Labourer",
  "Scaffolder",
  "HSE Officer",
  "Site Supervisor",
  "Other / General",
];

const BENEFITS = [
  {
    icon: FaHardHat,
    title: "Real site work",
    text: "Placements on active industrial, mining and construction sites, not warehoused on a list.",
  },
  {
    icon: FaClock,
    title: "Steady placements",
    text: "Short-term contracts and rolling assignments across a spread of clients and sectors.",
  },
  {
    icon: FaShieldAlt,
    title: "Safety first",
    text: "PPE provided and site inductions run before you start. We do not cut corners on safety.",
  },
  {
    icon: FaGraduationCap,
    title: "Certification supported",
    text: "We help experienced hands get the paperwork that gets them onto better-paid jobs.",
  },
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  trade: "",
  experience: "",
  location: "",
  certifications: "",
  notes: "",
};

/* Same approach as the quote form: no backend, so the application is composed
 * into a message and handed to WhatsApp or email.
 *
 * TODO(dev): when a backend or applicant-tracking service exists, replace
 * `submit()` with the POST and add CV file upload. */
const buildMessage = (form) =>
  [
    "*Job Application*",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Trade: ${form.trade}`,
    form.experience && `Experience: ${form.experience}`,
    form.location && `Location: ${form.location}`,
    form.certifications && `Certifications: ${form.certifications}`,
    form.notes && "",
    form.notes && `Notes: ${form.notes}`,
  ]
    .filter(Boolean)
    .join("\n");

const labelStyles = {
  fontSize: "xs",
  fontWeight: "bold",
  color: "gray.700",
  mb: 1.5,
  display: "block",
};

const controlStyles = {
  bg: "white",
  borderColor: "gray.300",
  fontSize: "sm",
  _focusVisible: {
    borderColor: "orange.400",
    outline: "2px solid",
    outlineColor: "orange.400",
    outlineOffset: "1px",
  },
};

/* Module scope on purpose - see the note in QuoteSection. */
const Field = ({ id, label, error, children }) => (
  <Box>
    <Text as="label" htmlFor={id} {...labelStyles}>
      {label}
    </Text>
    {children}
    {error && (
      <Text fontSize="xs" color="red.600" mt={1}>
        {error}
      </Text>
    )}
  </Box>
);

export default function WorkWithUsSection({ bg = "white", showHeading = true }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please give us your name";
    if (!form.phone.trim()) next.phone = "We need a number to reach you on";
    if (!form.trade) next.trade = "Please choose your trade";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (channel) => {
    if (!validate()) return;
    const message = buildMessage(form);
    const href =
      channel === "email"
        ? mailtoHref(`Job application - ${form.trade}`, message)
        : whatsappHref(message);
    window.open(href, channel === "email" ? "_self" : "_blank");
  };

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="work-with-us">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        {showHeading && (
          <SectionHeading
            eyebrow="Work with us"
            title="Join our workforce"
            subtitle="We recruit skilled tradespeople and operators for placements across industrial, mining and construction sites. If you have the trade and the paperwork, we want to hear from you."
          />
        )}

        {/* Why work with us */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: 5, md: 6 }}
          mb={{ base: 12, md: 16 }}
        >
          {BENEFITS.map((benefit, index) => (
            <Flex
              key={benefit.title}
              direction="column"
              bg="gray.50"
              p={{ base: 5, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              borderColor="gray.200"
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <Flex
                boxSize={11}
                rounded="lg"
                bg="primary.500"
                color="orange.400"
                align="center"
                justify="center"
                mb={4}
                flexShrink={0}
              >
                <Icon as={benefit.icon} boxSize={5} />
              </Flex>
              <Text fontWeight="bold" fontSize="sm" color="primary.500" mb={2}>
                {benefit.title}
              </Text>
              <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                {benefit.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

        {/* Application form */}
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 12 }}>
          <Box w={{ base: "100%", lg: "300px" }} flexShrink={0} data-aos="fade-up">
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="orange.500"
              mb={3}
            >
              Trades we recruit
            </Text>
            <Flex wrap="wrap" gap={2}>
              {TRADES.filter((trade) => trade !== "Other / General").map((trade) => (
                <Text
                  key={trade}
                  fontSize="xs"
                  fontWeight="medium"
                  color="primary.500"
                  bg="gray.100"
                  px={3}
                  py={1.5}
                  rounded="full"
                >
                  {trade}
                </Text>
              ))}
            </Flex>
          </Box>

          <Box
            flex="1"
            bg="gray.50"
            p={{ base: 5, md: 8 }}
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.200"
            data-aos="fade-up"
          >
            <Text fontWeight="bold" fontSize="lg" color="primary.500" mb={6}>
              Send us your details
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <Field id="w-name" label="Full name *" error={errors.name}>
                <Input
                  id="w-name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Full name"
                  {...controlStyles}
                  borderColor={errors.name ? "red.400" : "gray.300"}
                />
              </Field>

              <Field id="w-phone" label="Phone number *" error={errors.phone}>
                <Input
                  id="w-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="e.g. 0801 234 5678"
                  {...controlStyles}
                  borderColor={errors.phone ? "red.400" : "gray.300"}
                />
              </Field>

              <Field id="w-trade" label="Your trade *" error={errors.trade}>
                <Box
                  as="select"
                  id="w-trade"
                  value={form.trade}
                  onChange={update("trade")}
                  w="100%"
                  h="40px"
                  px={3}
                  rounded="md"
                  borderWidth="1px"
                  borderColor={errors.trade ? "red.400" : "gray.300"}
                  bg="white"
                  fontSize="sm"
                  color={form.trade ? "gray.900" : "gray.500"}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "orange.400",
                    outlineOffset: "1px",
                  }}
                >
                  <option value="">Select your trade...</option>
                  {TRADES.map((trade) => (
                    <option key={trade} value={trade}>
                      {trade}
                    </option>
                  ))}
                </Box>
              </Field>

              <Field id="w-experience" label="Years of experience">
                <Input
                  id="w-experience"
                  value={form.experience}
                  onChange={update("experience")}
                  placeholder="e.g. 6 years"
                  {...controlStyles}
                />
              </Field>

              <Field id="w-location" label="Where are you based?">
                <Input
                  id="w-location"
                  value={form.location}
                  onChange={update("location")}
                  placeholder="Town / state"
                  {...controlStyles}
                />
              </Field>

              <Field id="w-certs" label="Certifications held">
                <Input
                  id="w-certs"
                  value={form.certifications}
                  onChange={update("certifications")}
                  placeholder="e.g. trade test, HSE level 1"
                  {...controlStyles}
                />
              </Field>

              <Box gridColumn={{ md: "span 2" }}>
                <Field id="w-notes" label="Anything else">
                  <Textarea
                    id="w-notes"
                    value={form.notes}
                    onChange={update("notes")}
                    rows={4}
                    placeholder="Previous sites worked, availability, whether you can travel."
                    {...controlStyles}
                  />
                </Field>
              </Box>
            </SimpleGrid>

            <Flex direction={{ base: "column", sm: "row" }} gap={3} mt={7}>
              <Button
                flex="1"
                size="lg"
                bg="#25D366"
                color="white"
                fontSize="sm"
                _hover={{ filter: "brightness(0.92)" }}
                onClick={() => submit("whatsapp")}
              >
                <Icon as={FaWhatsapp} boxSize={5} mr={2} />
                Apply via WhatsApp
              </Button>
              <Button
                flex="1"
                size="lg"
                variant="outline"
                borderColor="primary.500"
                color="primary.500"
                fontSize="sm"
                _hover={{ bg: "primary.500", color: "white" }}
                onClick={() => submit("email")}
              >
                <Icon as={FaEnvelope} boxSize={4} mr={2} />
                Apply by email
              </Button>
            </Flex>

            <Text fontSize="xs" color="gray.500" mt={4} lineHeight="1.6">
              To attach a CV, use the email option. Nothing you enter here is
              stored on this website.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
