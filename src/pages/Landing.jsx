import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Carousel from "../component/Carousel";
import ServicesSection from "../component/servicesection";
import CallToAction from "../component/CalltoAction";
import MidPage from "../component/midpage";
import Footer from "../component/Footer";
import AboutSection from "../component/AboutSection";
import MidPageCta from "../component/MidPageCta";
import CeoSection from "../component/CeoSection";
import IndustriesSection from "../component/IndustriesSection";
import ProjectsSection from "../component/ProjectsSection";
import OnSiteGallery from "../component/OnSiteGallery";
import EquipmentSection from "../component/EquipmentSection";
import AwardsSection from "../component/AwardsSection";
import QuoteSection from "../component/QuoteSection";
import MissionVision from "../component/MissionVision";

const Landing = () => {
  return (
    <Box>
      <Box boxSizing={"border-box"} overflow={"hidden"}>
        <NavBar />
        <Carousel />
        <AboutSection />
        <MissionVision bg="gray.50" />
        <CeoSection />
        {/* Sectors early on, so a visitor can spot their own industry fast. */}
        <IndustriesSection />
        <CallToAction />
        <ServicesSection />
        {/* Previews only - each links through to its own full page. */}
        <ProjectsSection limit={3} showViewAll bg="gray.50" />
        {/* Real photography, straight after the project cards that are still
            standing in for it. Default white against the gray.50 above. */}
        <OnSiteGallery />
        <MidPageCta />
        <EquipmentSection limit={2} showViewAll />
        {/* White here to keep the alternation - EquipmentSection above and
            AwardsSection both default to gray.50. */}
        <AwardsSection bg="white" />
        <MidPage />
        <QuoteSection bg="white" />
        <Footer />
      </Box>
    </Box>
  );
};

export default Landing;
