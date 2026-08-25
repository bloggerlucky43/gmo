import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Carousel from "../component/Carousel";
import ServicesSection from "../component/servicesection";
import CallToAction from "../component/CalltoAction";
import MidPage from "../component/midpage";
import Footer from "../component/Footer";
import Testimonials from "../component/Testimonial";
import AboutSection from "../component/AboutSection";
import MidPageCta from "../component/MidPageCta";
import CeoSection from "../component/CeoSection";
import IndustriesSection from "../component/IndustriesSection";
import ProjectsSection from "../component/ProjectsSection";
import EquipmentSection from "../component/EquipmentSection";
import AwardsSection from "../component/AwardsSection";
import QuoteSection from "../component/QuoteSection";

const Landing = () => {
  return (
    <Box>
      <Box boxSizing={"border-box"} overflow={"hidden"}>
        <NavBar />
        <Carousel />
        <AboutSection />
        <CeoSection />
        {/* Sectors early on, so a visitor can spot their own industry fast. */}
        <IndustriesSection />
        <CallToAction />
        <ServicesSection />
        {/* Previews only - each links through to its own full page. */}
        <ProjectsSection limit={3} showViewAll bg="gray.50" />
        <MidPageCta />
        <EquipmentSection limit={2} showViewAll />
        <Testimonials limit={3} bg="white" />
        <AwardsSection />
        <MidPage />
        <QuoteSection bg="white" />
        <Footer />
      </Box>
    </Box>
  );
};

export default Landing;
