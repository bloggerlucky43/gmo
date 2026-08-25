import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import PageHero from "../component/PageHero";
import EquipmentSection from "../component/EquipmentSection";
import QuoteSection from "../component/QuoteSection";

const Equipment = () => {
  return (
    <Box boxSizing="border-box" overflow="hidden">
      <NavBar />
      <PageHero
        eyebrow="Equipment & fleet"
        title="Plant and equipment for hire"
        subtitle="Machines serviced, certified and dispatched with trained operators. Tell us the job and we will confirm availability and rate."
      />
      <EquipmentSection showHeading={false} bg="white" />
      <QuoteSection />
      <Footer />
    </Box>
  );
};

export default Equipment;
