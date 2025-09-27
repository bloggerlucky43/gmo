import { Box, Flex, Heading, Text, Image, List, Icon } from "@chakra-ui/react";
import industryImage from "../assets/heavy.jpg"; // replace with your image
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
        <Box flex="1">
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
        <Box flex="1">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color="primary.500"
            mb={6}
          >
            About Us
          </Heading>
          <TextType
            text={[
              "We are a multi-service industrial solutions company committed todelivering high-quality, reliable, and sustainable services across different sectors. Our expertise spans installations, resourcing, recruitment, environmental management, and more — ensuringindustries run smoothly and efficiently.",
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
        </Box>
      </Flex>
    </Box>
  );
}
