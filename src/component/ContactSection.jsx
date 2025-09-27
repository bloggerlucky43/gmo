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
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactSection() {
  return (
    <Box w="100%" bg="gray.50" py={20} px={{ base: 4, md: 16 }}>
      {/* Section Header */}
      <Flex direction="column" textAlign="center" mb={12}>
        <Text fontSize="2xl" fontWeight="bold" color="primary.500">
          CONTACT US
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
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
        <VStack align="start" spacing={4} w={{ base: "100%", md: "40%" }}>
          <HStack>
            <Icon as={MdPhone} color="primary.500" w={6} h={6} />
            <Text>+234 123 456 7890</Text>
          </HStack>
          <HStack>
            <Icon as={MdEmail} color="primary.500" w={6} h={6} />
            <Text>info@yourcompany.com</Text>
          </HStack>
          <HStack>
            <Icon as={MdLocationOn} color="primary.500" w={6} h={6} />
            <Text>123 Industrial Avenue, Lagos, Nigeria</Text>
          </HStack>
        </VStack>

        {/* Contact Form */}
        <Box
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
