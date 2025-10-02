import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import TestimonialMarquee from "../component/Testimonial";
export const TestimonialPage = () => {
  return (
    <Box>
      <Box boxSizing="border-box" overflow="hidden">
        <NavBar />
        <TestimonialMarquee />
        <Footer />
      </Box>
    </Box>
  );
};
