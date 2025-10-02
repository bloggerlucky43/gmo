import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";

import ServiceSection from "../component/servicesection";
import { ServicePageComponent } from "../component/ServicePageComponent";
const ServicePage = () => {
  return (
    <Box>
      <Box boxSizing="border-box" overflow="hidden">
        <NavBar />
        <ServicePageComponent />
        <ServiceSection />
        <Footer />
      </Box>
    </Box>
  );
};

export default ServicePage;
