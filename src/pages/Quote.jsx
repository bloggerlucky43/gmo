import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import PageHero from "../component/PageHero";
import QuoteSection from "../component/QuoteSection";
import IndustriesSection from "../component/IndustriesSection";

const Quote = () => {
  return (
    <Box boxSizing="border-box" overflow="hidden">
      <NavBar />
      <PageHero
        eyebrow="Request a quote"
        title="Get a quote for your project"
        subtitle="Tell us what the job involves and we will come back with a price. No obligation, and nothing here commits you to anything."
      />
      <QuoteSection showHeading={false} bg="white" />
      <IndustriesSection bg="gray.50" />
      <Footer />
    </Box>
  );
};

export default Quote;
