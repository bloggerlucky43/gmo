import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import PageHero from "../component/PageHero";
import ProjectsSection from "../component/ProjectsSection";
import AwardsSection from "../component/AwardsSection";
import MidPageCta from "../component/MidPageCta";

const Projects = () => {
  return (
    <Box boxSizing="border-box" overflow="hidden">
      <NavBar />
      <PageHero
        eyebrow="Our work"
        title="Projects & case studies"
        subtitle="Completed and ongoing contracts across mining, manufacturing, construction and processing - what the job was, how long it took, and what it delivered."
      />
      <ProjectsSection showHeading={false} />
      <AwardsSection />
      <MidPageCta />
      <Footer />
    </Box>
  );
};

export default Projects;
