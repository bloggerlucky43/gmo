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
import { FaWhatsapp, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { whatsappHref, mailtoHref, PHONES, telHref } from "../config/contact";
import { SERVICE_OPTIONS } from "../config/services";

const REASSURANCES = [
  "Response within one working day",
  "No obligation - a quote costs you nothing",
  "Certified operators and equipment included",
];

const EMPTY_FORM = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  startDate: "",
  duration: "",
  details: "",
};

/* There is no backend on this site, so the form composes a structured message
 * and hands it to WhatsApp (or email). That is a real, working submission path
 * with nothing to host or maintain.
 *
 * TODO(dev): if a proper backend or a form service is added later, replace
 * `submit()` below with the POST request. The validation and field set can
 * stay exactly as they are. */
const buildMessage = (form) =>
  [
    "*Quote Request*",
    "",
    `Name: ${form.name}`,
    form.company && `Company: ${form.company}`,
    `Phone: ${form.phone}`,
    form.email && `Email: ${form.email}`,
    `Service: ${form.service}`,
    form.location && `Site location: ${form.location}`,
    form.startDate && `Preferred start: ${form.startDate}`,
    form.duration && `Estimated duration: ${form.duration}`,
    form.details && "",
    form.details && `Details: ${form.details}`,
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

/* Defined at module scope, NOT inside QuoteSection. A component declared
 * inside the render body is a new type on every render, so React unmounts and
 * remounts its subtree - which would make the input lose focus after every
 * single keystroke. */
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

export default function QuoteSection({ bg = "gray.50", showHeading = true }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name";
    if (!form.phone.trim()) next.phone = "We need a number to call you back on";
    if (!form.service) next.service = "Please choose the service you need";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (channel) => {
    if (!validate()) return;
    const message = buildMessage(form);
    const href =
      channel === "email"
        ? mailtoHref(`Quote request - ${form.service}`, message)
        : whatsappHref(message);
    window.open(href, channel === "email" ? "_self" : "_blank");
  };

  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="quote">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        {showHeading && (
          <SectionHeading
            eyebrow="Request a quote"
            title="Tell us about the job"
            subtitle="The more detail you give, the more accurate the quote. Nothing here commits you to anything."
          />
        )}

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 12 }}>
          {/* Form */}
          <Box
            flex="1"
            bg="white"
            p={{ base: 5, md: 8 }}
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.200"
            boxShadow="sm"
            data-aos="fade-up"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <Field id="q-name" label="Your name *" error={errors.name}>
                <Input
                  id="q-name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Full name"
                  {...controlStyles}
                  borderColor={errors.name ? "red.400" : "gray.300"}
                />
              </Field>

              <Field id="q-company" label="Company">
                <Input
                  id="q-company"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Company name"
                  {...controlStyles}
                />
              </Field>

              <Field id="q-phone" label="Phone number *" error={errors.phone}>
                <Input
                  id="q-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="e.g. 0801 234 5678"
                  {...controlStyles}
                  borderColor={errors.phone ? "red.400" : "gray.300"}
                />
              </Field>

              <Field id="q-email" label="Email">
                <Input
                  id="q-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  {...controlStyles}
                />
              </Field>

              <Box gridColumn={{ md: "span 2" }}>
                <Field
                  id="q-service"
                  label="Service required *"
                  error={errors.service}
                >
                  {/* Native select - no dependency on Chakra's composed Select */}
                  <Box
                    as="select"
                    id="q-service"
                    value={form.service}
                    onChange={update("service")}
                    w="100%"
                    h="40px"
                    px={3}
                    rounded="md"
                    borderWidth="1px"
                    borderColor={errors.service ? "red.400" : "gray.300"}
                    bg="white"
                    fontSize="sm"
                    color={form.service ? "gray.900" : "gray.500"}
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "orange.400",
                      outlineOffset: "1px",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </Box>
                </Field>
              </Box>

              <Field id="q-location" label="Site location">
                <Input
                  id="q-location"
                  value={form.location}
                  onChange={update("location")}
                  placeholder="Town / state"
                  {...controlStyles}
                />
              </Field>

              <Field id="q-start" label="Preferred start date">
                <Input
                  id="q-start"
                  type="date"
                  value={form.startDate}
                  onChange={update("startDate")}
                  {...controlStyles}
                />
              </Field>

              <Box gridColumn={{ md: "span 2" }}>
                <Field id="q-duration" label="Estimated duration">
                  <Input
                    id="q-duration"
                    value={form.duration}
                    onChange={update("duration")}
                    placeholder="e.g. 6 weeks, or ongoing contract"
                    {...controlStyles}
                  />
                </Field>
              </Box>

              <Box gridColumn={{ md: "span 2" }}>
                <Field id="q-details" label="Scope / details">
                  <Textarea
                    id="q-details"
                    value={form.details}
                    onChange={update("details")}
                    rows={5}
                    placeholder="Headcount or equipment needed, site conditions, certifications required, anything else that affects the price."
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
                Send via WhatsApp
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
                Send by email
              </Button>
            </Flex>

            <Text fontSize="xs" color="gray.500" mt={4} lineHeight="1.6">
              Your details are sent straight to us through WhatsApp or your email
              app. Nothing is stored on this website.
            </Text>
          </Box>

          {/* Reassurance / direct contact */}
          <Box w={{ base: "100%", lg: "300px" }} flexShrink={0} data-aos="fade-up">
            <Box
              bg="primary.500"
              color="white"
              p={{ base: 6, md: 7 }}
              rounded="xl"
              borderLeftWidth="3px"
              borderLeftColor="orange.500"
            >
              <Text fontWeight="bold" fontSize="lg" mb={5}>
                What happens next
              </Text>

              <Flex direction="column" gap={4} mb={7}>
                {REASSURANCES.map((line) => (
                  <Flex key={line} gap={3} align="flex-start">
                    <Icon
                      as={FaCheckCircle}
                      boxSize={4}
                      color="orange.400"
                      mt={0.5}
                      flexShrink={0}
                    />
                    <Text fontSize="sm" color="whiteAlpha.900" lineHeight="1.6">
                      {line}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
                color="orange.400"
                mb={3}
              >
                Rather just call?
              </Text>
              <Flex direction="column" gap={2}>
                {PHONES.map((phone) => (
                  <Box
                    as="a"
                    key={phone}
                    href={telHref(phone)}
                    fontSize="sm"
                    fontWeight="bold"
                    color="white"
                    _hover={{ color: "orange.400" }}
                  >
                    {phone}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
