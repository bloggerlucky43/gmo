import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Carousel from "../component/Carousel";
import ServicesSection from "../component/servicesection";
import CallToAction from "../component/CalltoAction";
import MidPage from "../component/midpage";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";
import TestimonialMarquee from "../component/Testimonial";
import AboutSection from "../component/AboutSection";
import MidPageCta from "../component/MidPageCta";
const Landing = () => {
  return (
    <Box>
      <Box boxSizing={"border-box"} overflow={"hidden"}>
        <NavBar />
        <Carousel />
        <AboutSection />
        <CallToAction />
        <ServicesSection />
        <MidPageCta />
        <TestimonialMarquee />
        <MidPage />
        {/* <ContactSection /> */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Landing;
