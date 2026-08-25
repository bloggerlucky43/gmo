import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";
import about4 from "../assets/about4.webp";
import about5 from "../assets/about5.webp";
import about6 from "../assets/about6.webp";
import ServiceCard from "./servicecard";

const ChooseUs = () => {
  return (
    <Flex
      w={{ base: "90%", md: "85%", lg: "70%" }}
      cursor="pointer"
      mt={{ base: "8vh", md: "10vh" }}
      direction="column"
      justifySelf={"center"}
    >
      <Flex direction="column">
        <Text
          color="primary.500"
          fontWeight={"bold"}
          fontSize={{ base: "x-large", md: "xx-large" }}
        >
          WHY CHOOSE US ?
        </Text>
        <Text mt={{ base: "6", md: 8 }} color="gray.800">
          We don’t just provide services; we deliver value, reliability, and
          long-term partnerships.
        </Text>
      </Flex>
      <SimpleGrid
        mb="10vh"
        columns={{ base: 1, md: 2, lg: 3 }}
        mt={{ base: 5, md: 10 }}
      >
        <ServiceCard
          src={about1}
          title="Expertise you can trust"
          desc="Our team of certified engineers and technicians brings years of exprerience in industrial electrical,mechanical, and environmental services"
        />
        <ServiceCard
          src={about2}
          title="Comprehensive Solutions"
          desc="From manpower supply to cleaning,vegetation control, and installations, we offer a one-stop solution for all your industrial needs"
        />
        <ServiceCard
          src={about3}
          title="Commitment to Safety & Compliance"
          desc="We follow international safety standards and best practices to ensure safe and efficient operations"
        />
        <ServiceCard
          src={about4}
          title="Cost Effective & Reliable"
          desc="Our services are designed to save you time and resources without compromising on quality"
        />
        <ServiceCard
          src={about5}
          title="Sustainability Driven"
          desc="We integrate eco-friendly methods in our vegetation,water sanitation, and landscaping projects to protect the environment."
        />
        <ServiceCard
          src={about6}
          title="Client-Focused Approach"
          desc="Every project is tailored to your specific needs, ensuring you get solutions that truly work for your industry."
        />
      </SimpleGrid>
    </Flex>
  );
};

export default ChooseUs;
