import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import AboutSection from "../component/AboutSection";
import ChooseUs from "../component/ChooseUs";
import AboutComponent from "../component/AboutComponent";
import CallToAction from "../component/CalltoAction";
import CeoSection from "../component/CeoSection";
const About = () => {
  return (
    <Box>
      <Box boxSizing="border-box" overflow={"hidden"}>
        <NavBar />
        <AboutComponent />

        <AboutSection />
        <CeoSection />
        <CallToAction />
        <ChooseUs />
        <Footer />
      </Box>
    </Box>
  );
};

export default About;
