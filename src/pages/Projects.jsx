import { Box } from "@chakra-ui/react";
import NavBar from "../component/navbar";
import Footer from "../component/Footer";
import PageHero from "../component/PageHero";
import ProjectsSection from "../component/ProjectsSection";
import OnSiteGallery from "../component/OnSiteGallery";
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
      {/* The project cards above are still stock stand-ins; this is the real
          photography, so it belongs on this page more than anywhere. */}
      <OnSiteGallery bg="gray.50" />
      {/* White here to keep the alternation - AwardsSection defaults to
          gray.50, same as the gallery above it. */}
      <AwardsSection bg="white" />
      <MidPageCta />
      <Footer />
    </Box>
  );
};

export default Projects;
