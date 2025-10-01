import { Box } from "@chakra-ui/react";
import Footer from "../component/Footer";
import NavBar from "../component/navbar";
import ContactSection from "../component/ContactSection";
const Contact = () => {
  return (
    <Box>
      <Box boxSizing="border-box" overflow="hidden">
        <NavBar />
        <ContactSection />
        <Footer />
      </Box>
    </Box>
  );
};
export default Contact;
