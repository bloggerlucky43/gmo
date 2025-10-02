import { Box } from "@chakra-ui/react";
import Footer from "../component/Footer";
import NavBar from "../component/navbar";
import ContactPageComponent from "../component/contactpagecomponent"
import ContactSection from "../component/ContactSection";
const Contact = () => {
  return (
    <Box>
      <Box boxSizing="border-box" overflow="hidden">
        <NavBar />
        <ContactPageComponent />
        <ContactSection />
        <Footer />
      </Box>
    </Box>
  );
};
export default Contact;
