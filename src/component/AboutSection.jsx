import { Box, Flex, Heading, Text, Image, List, Icon } from "@chakra-ui/react";
import industryImage from "../assets/interior.jpg";
import CEO from "../assets/enginnerimage.jpeg";
import { LuCircleCheck } from "react-icons/lu";
import TextType from "./stylings/TextType";
export default function AboutSection() {
  return (
    <Box w="100%" py={16} bg="white" id="about">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="7xl"
        mx="auto"
        px={6}
        gap={10}
      >
        {/* Left Image */}
        <Box flex="1" data-aos="slide-up">
          <Image
            src={industryImage}
            alt="Industrial Services"
            rounded="2xl"
            shadow="lg"
            objectFit="cover"
            w="100%"
            h={{ base: "250px", md: "400px" }}
          />
        </Box>

        {/* Right Content */}
        <Box flex="1" data-aos="slide-up">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color="primary.500"
            mb={6}
          >
            About Us
          </Heading>
          <TextType
            text={[
              "We are a multi-service industrial solutions company committed to delivering high-quality, reliable, and sustainable services across different sectors. Our expertise spans installations, resourcing, recruitment, environmental management, and more — ensuring industries run smoothly and efficiently.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            textColors={["black"]}
          />
          {/* <Text color="gray.700" fontSize="lg" mb={6}></Text> */}

          <List.Root gap="2" mt={6} variant="plain" align="center">
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Industrial Electrical & Mechanical Installations
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Resourcing & Outsourcing
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Rental Services
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Industrial Cleaning Services
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Labour Recruiting
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Vegetation of Mining Areas
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Water Sanitation Services
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="orange.500">
                <LuCircleCheck />
              </List.Indicator>
              Landscaping
            </List.Item>
          </List.Root>
          {/* CEO Section */}
          <Flex mt={10} align="center" gap={4}>
            <Image
              src={CEO} // replace with real CEO photo
              alt="CEO"
              boxSize="80px"
              rounded="full"
              objectFit="cover"
              shadow="md"
            />
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Mr. Godfrey Osieku
              </Text>
              <Text fontSize="sm" color="gray.600">
                Founder & CEO
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
