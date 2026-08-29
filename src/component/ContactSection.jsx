import { Box, Flex, Text, Input, Textarea, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  ADDRESS,
  EMAIL,
  PHONES,
  mailtoHref,
  mapsHref,
  telHref,
  whatsappHref,
} from "../config/contact";
import { ENQUIRY_SUBJECTS } from "../config/services";

/* This form used to render uncontrolled inputs and a button with no handler -
 * a visitor could fill it in, press Send Message and lose everything they typed.
 *
 * There is no backend on this site, so it now follows the same pattern as
 * QuoteSection: compose a structured message and hand it to WhatsApp or to the
 * visitor's mail client. Both are real, working delivery paths with nothing to
 * host or maintain.
 *
 * TODO(dev): if a backend or a form service (Formspree, Web3Forms, a Netlify
 * function) is added later, replace `submit()` with the POST request. The field
 * set, validation and success state can stay exactly as they are. */

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const buildMessage = (form) =>
  [
    "*Website Enquiry*",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email && `Email: ${form.email}`,
    `Subject: ${form.subject || "General enquiry"}`,
    "",
    `Message: ${form.message}`,
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

/* Defined at module scope, NOT inside ContactSection. A component declared in
 * the render body is a new type on every render, so React would unmount and
 * remount its subtree - making the input lose focus after every keystroke. */
const Field = ({ id, label, error, children }) => (
  <Box>
    <Text as="label" htmlFor={id} {...labelStyles}>
      {label}
    </Text>
    {children}
    {error && (
      <Text fontSize="xs" color="red.600" mt={1} role="alert">
        {error}
      </Text>
    )}
  </Box>
);

const DETAILS = [
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: ADDRESS,
    href: mapsHref,
    external: true,
  },
  ...PHONES.map((phone) => ({
    icon: FaPhone,
    label: "Phone",
    value: phone,
    href: telHref(phone),
  })),
  {
    icon: FaEnvelope,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sentVia, setSentVia] = useState("");

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
    setSentVia("");
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name";
    if (!form.phone.trim()) {
      next.phone = "We need a number to reach you on";
    } else if (form.phone.replace(/\D/g, "").length < 10) {
      next.phone = "That does not look like a complete phone number";
    }
    /* Email is optional, but if one is given it has to be usable. */
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      next.email = "Please check this email address";
    }
    if (!form.message.trim()) {
      next.message = "Please tell us what you need";
    } else if (form.message.trim().length < 10) {
      next.message = "A little more detail will help us reply properly";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (channel) => {
    if (!validate()) return;

    const message = buildMessage(form);
    const subject = `Website enquiry - ${form.subject || "General enquiry"}`;
    const href =
      channel === "email"
        ? mailtoHref(subject, message)
        : whatsappHref(message);

    /* mailto: has to stay in the same tab - a popup-blocked _blank would look
       to the visitor like nothing happened. WhatsApp Web wants its own tab. */
    window.open(href, channel === "email" ? "_self" : "_blank");

    setSentVia(channel);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  return (
    <Box
      w={{ base: "100%", md: "70%" }}
      data-aos="fade"
      bg="gray.50"
      justifySelf="center"
      py={20}
      px={{ base: 4, md: 16 }}
      mb={8}
      mt={{ md: "8vh" }}
      id="contact"
    >
      {/* Section Header */}
      <Flex data-aos="fade-up" direction="column" textAlign="center" mb={12}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="primary.500"
        >
          CONTACT US
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} mt={2} color="gray.600">
          Get in touch for inquiries, quotes, or project consultation
        </Text>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={10}
        justify="center"
        align="flex-start"
      >
        {/* Contact Info - every line now actually actionable */}
        <Flex data-aos="fade-up" direction="column" gap={5} flexShrink={0}>
          {DETAILS.map((detail) => (
            <Flex
              as="a"
              key={`${detail.label}-${detail.value}`}
              href={detail.href}
              target={detail.external ? "_blank" : undefined}
              rel={detail.external ? "noopener noreferrer" : undefined}
              gap={4}
              align="flex-start"
              role="group"
              transition="color 0.2s"
              _hover={{ color: "orange.500" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "orange.400",
                outlineOffset: "3px",
                borderRadius: "sm",
              }}
            >
              <Icon
                as={detail.icon}
                boxSize={7}
                color="primary.500"
                flexShrink={0}
                mt={1}
                _groupHover={{ color: "orange.500" }}
              />
              <Flex direction="column" minW={0}>
                <Text fontSize={{ base: "md", md: "lg" }} color="primary.500">
                  {detail.label}
                </Text>
                <Flex align="center" gap={2}>
                  <Text
                    color="gray.700"
                    fontSize={{ base: "sm", md: "md" }}
                    wordBreak="break-word"
                    _groupHover={{ color: "orange.500" }}
                  >
                    {detail.value}
                  </Text>
                  {detail.external && (
                    <Icon
                      as={FaExternalLinkAlt}
                      aria-hidden="true"
                      boxSize={2.5}
                      color="gray.400"
                      flexShrink={0}
                    />
                  )}
                </Flex>
              </Flex>
            </Flex>
          ))}

          <Flex
            as="a"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            align="center"
            justify="center"
            gap={2}
            mt={2}
            py={3}
            px={5}
            rounded="md"
            bg="#25D366"
            color="white"
            fontWeight="bold"
            fontSize="sm"
            transition="filter 0.2s"
            _hover={{ filter: "brightness(0.92)" }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "orange.400",
              outlineOffset: "2px",
            }}
          >
            <Icon as={FaWhatsapp} boxSize={5} />
            Chat on WhatsApp
          </Flex>
        </Flex>

        {/* Contact Form */}
        <Box
          data-aos="fade-up"
          as="form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            submit("whatsapp");
          }}
          w={{ base: "100%", md: "60%" }}
          bg="white"
          p={6}
          rounded="xl"
          shadow="md"
        >
          {sentVia && (
            <Flex
              gap={3}
              align="flex-start"
              bg="green.50"
              borderWidth="1px"
              borderColor="green.200"
              rounded="md"
              px={4}
              py={3}
              mb={5}
              role="status"
            >
              <Icon
                as={FaCheckCircle}
                boxSize={4}
                color="green.500"
                mt={0.5}
                flexShrink={0}
              />
              <Text fontSize="sm" color="green.900" lineHeight="1.6">
                {sentVia === "email"
                  ? "Your email app should now be open with the message ready - press send there to reach us."
                  : "WhatsApp should now be open with your message ready - press send there to reach us."}
              </Text>
            </Flex>
          )}

          <Flex direction="column" gap={5}>
            <Field id="c-name" label="Your name *" error={errors.name}>
              <Input
                id="c-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                placeholder="Full name"
                {...controlStyles}
                borderColor={errors.name ? "red.400" : "gray.300"}
              />
            </Field>

            <Field id="c-phone" label="Phone number *" error={errors.phone}>
              <Input
                id="c-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="e.g. 0801 234 5678"
                {...controlStyles}
                borderColor={errors.phone ? "red.400" : "gray.300"}
              />
            </Field>

            <Field id="c-email" label="Email" error={errors.email}>
              <Input
                id="c-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                {...controlStyles}
                borderColor={errors.email ? "red.400" : "gray.300"}
              />
            </Field>

            <Field id="c-subject" label="What is this about?">
              {/* Native select - no dependency on Chakra's composed Select */}
              <Box
                as="select"
                id="c-subject"
                name="subject"
                value={form.subject}
                onChange={update("subject")}
                w="100%"
                h="40px"
                px={3}
                rounded="md"
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
                fontSize="sm"
                color={form.subject ? "gray.900" : "gray.500"}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "orange.400",
                  outlineOffset: "1px",
                }}
              >
                <option value="">Select a subject...</option>
                {ENQUIRY_SUBJECTS.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </Box>
            </Field>

            <Field id="c-message" label="Your message *" error={errors.message}>
              <Textarea
                id="c-message"
                name="message"
                value={form.message}
                onChange={update("message")}
                rows={6}
                placeholder="Tell us about the job, the site and the timeline."
                {...controlStyles}
                borderColor={errors.message ? "red.400" : "gray.300"}
              />
            </Field>
          </Flex>

          <Flex direction={{ base: "column", sm: "row" }} gap={3} mt={{ base: 10, sm: 6 }}>
            <Button
              type="submit"
              flex="1"
              bg="#25D366"
              color="white"
              fontSize="sm"
              _hover={{ "@media (hover: hover)": { filter: "brightness(0.92)" } }}
            >
              <Icon as={FaWhatsapp} boxSize={5} mr={2} />
              Send via WhatsApp
            </Button>
            <Button
              type="button"
              flex="1"
              variant="outline"
              borderColor="primary.500"
              color="primary.500"
              fontSize="sm"
              _hover={{ "@media (hover: hover)": { bg: "primary.500", color: "white" } }}
              onClick={() => submit("email")}
            >
              <Icon as={FaEnvelope} boxSize={4} mr={2} />
              Send by email
            </Button>
          </Flex>

          <Text fontSize="xs" color="gray.500" mt={4} lineHeight="1.6">
            Your details go straight to us through WhatsApp or your own email
            app. Nothing is stored on this website.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
