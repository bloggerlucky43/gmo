import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import PageHero from "../component/PageHero";
import Testimonials from "../component/Testimonial";

const TestimonialPage = () => {
  return (
    <Box boxSizing="border-box" overflow="hidden">
      <NavBar />
      <PageHero
        eyebrow="Client feedback"
        title="What it is like to work with us"
        subtitle="Feedback from the plant managers, site superintendents and HSE leads who bring our crews and equipment onto their projects."
      />
      {/* Heading suppressed - the page header above already covers it. */}
      <Testimonials showHeading={false} bg="white" />
      <Footer />
    </Box>
  );
};

export default TestimonialPage;
