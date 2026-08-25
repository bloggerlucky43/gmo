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
        subtitle="We place skilled tradespeople and operators on industrial, mining and construction projects. If you have the trade and the paperwork, send us your details."
      />
      <WorkWithUsSection showHeading={false} />
      <Footer />
    </Box>
  );
};

export default Careers;
