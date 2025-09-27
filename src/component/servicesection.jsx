import { SimpleGrid, Flex, Text } from "@chakra-ui/react";
import ServiceCard from "./servicecard";
import heavy from "../assets/heavy.jpg";
import eng from "../assets/eng.jpg";
import num2 from "../assets/num2.jpeg";
import labour from "../assets/labour.jpg";
import excavator from "../assets/excavator.jpg";
import clothing from "../assets/clothing.jpg";
import photo from "../assets/photo.jpg";
import building from "../assets/building.jpg";
export default function ServicesSection() {
  return (
    <Flex
      w={{ base: "90%", md: "85%", lg: "70%" }}
      cursor="pointer"
      mt={{ base: "8vh", md: "10vh" }}
      p={4}
      direction="column"
      justifySelf={"center"}
    >
      <Flex direction="column">
        <Text
          color="primary.500"
          fontWeight={"bold"}
          fontSize={{ base: "x-large", md: "xx-large" }}
        >
          SERVICES
        </Text>
        <Text mt={{ base: "6", md: 8 }} color="gray.800">
          We deliver reliable and high-quality services tailored to your needs.
        </Text>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        mt={{ base: "5", md: "10" }}
      >
        <ServiceCard
          src={eng}
          title="Reliable Industrial Installations"
          desc="Expert electrical and mechanical installation services for factories, plants, and heavy-duty industrial facilities"
        />
        <ServiceCard
          src={num2}
          title="Workforce Resourcing & Outsourcing"
          desc="Flexible and efficient manpower solutions tailored to meet your industrial project needs."
        />
        <ServiceCard
          src={labour}
          title="Skilled Labour Recruitment"
          desc="Connecting industries with trained and certified professionals for construction, engineering, and plant operations."
        />
        <ServiceCard
          src={excavator}
          title="Industrial Equipment Rental"
          desc="Affordable rental of machinery, tools, and industrial equipment to keep your projects moving."
        />
        <ServiceCard
          src={clothing}
          title="Professional Industrial Cleaning"
          desc="Comprehensive cleaning services for factories, warehouses, and plants to ensure a safe and productive environment."
        />
        <ServiceCard
          src={photo}
          title="Mining Site Vegetation Clearance"
          desc="Clearing and maintaining vegetation in mining zones for safety, accessibility, and compliance"
        />
        <ServiceCard
          src={building}
          title="Water Treatment & Sanitation"
          desc="Reliable sanitation services for clean and sustainable water management across industrial sites."
        />
        <ServiceCard
          src={heavy}
          title="Land Scraping & Site Preparation"
          desc="Preparing land for industrial, construction, or mining projects with precision scraping and leveling."
        />
        <ServiceCard
          src={building}
          title="Water Treatment & Sanitation"
          desc="Reliable sanitation services for clean and sustainable water management across industrial sites."
        />
      </SimpleGrid>
    </Flex>
  );
}
