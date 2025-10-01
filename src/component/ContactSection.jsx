import {
  Box,
  Flex,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactSection() {
  const [form, setForm] = useState({});
  return (
    <Box
      w={{ base: "100%", md: "70%" }}
      data-aos="fade"
      bg="gray.50"
      justifySelf="center"
      py={20}
      px={{ base: 4, md: 16 }}
      mb={8}
      mt="8vh"
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
        {/* Contact Info */}
        <Flex data-aos="fade-up" direction="column">
          <Flex gap={4}>
            <Icon as={MdLocationOn} boxSize={8} color="primary.500" />
            <Flex direction="column">
              <Text fontSize={{ base: "md", md: "lg" }}>Address</Text>
              <Text color="gray.700" fontSize={{ base: "sm", md: "md" }}>
                7 Ajegunle Ewekoro Lagos/Abeokuta Road Ogun State
              </Text>
            </Flex>
          </Flex>

          <Flex gap={4} mt={4}>
            <Icon as={FaPhone} boxSize={8} color="primary.500" />
            <Flex direction="column">
              <Text fontSize={{ base: "md", md: "lg" }}>Phone</Text>
              <Text color="gray.700" fontSize={{ base: "sm", md: "md" }}>
                08165682612, 08032930304
              </Text>
            </Flex>
          </Flex>

          <Flex gap={4} mt={4}>
            <Icon as={FaEnvelope} boxSize={8} color="primary.500" />
            <Flex direction="column">
              <Text fontSize={{ base: "md", md: "lg" }}>Email</Text>
              <Text color="gray.700" fontSize={{ base: "sm", md: "md" }}>
                oshiektech4@gmail.com
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Contact Form */}
        <Box
          data-aos="fade-up"
          w={{ base: "100%", md: "60%" }}
          bg="white"
          p={6}
          rounded="xl"
          shadow="md"
        >
          <VStack spacing={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={6} />
            <Button
              bg="orange.400"
              color="white"
              _hover={{ bg: "orange.500" }}
              w="full"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
