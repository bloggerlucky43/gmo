import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import PageHero from "../component/PageHero";
import WorkWithUsSection from "../component/WorkWithUsSection";

const Careers = () => {
  return (
    <Box boxSizing="border-box" overflow="hidden">
      <NavBar />
      <PageHero
        eyebrow="Work with us"
        title="Build your career on site"
        subtitle="Join our team at Godfrey M. Oshieku Technical Nigeria LTD. We are always looking for qualified and dedicated professionals to work on our industrial, mechanical and civil projects."
      />
      <WorkWithUsSection showHeading={false} />
      <Footer />
    </Box>
  );
};

export default Careers;
