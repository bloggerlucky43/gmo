import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";
import about4 from "../assets/about4.webp";
import about5 from "../assets/about5.webp";
import about6 from "../assets/about6.webp";
import ServiceCard from "./servicecard";
import { FOUNDED_YEAR, yearsInIndustry } from "../config/contact";

/*  All five reasons from the profile document's own "Why Choose Us" list, plus
 *  the comprehensive-solutions point the wide service range genuinely supports.
 *
 *  Dropped from the previous version: "Cost Effective & Reliable", "Client-Focused
 *  Approach" and "Sustainability Driven" - all invented, and all displacing the
 *  document's actual selling points. The strongest of them (experience, timely
 *  execution, shutdown support) had been left off the site entirely. */
const REASONS = [
  {
    src: about1,
    title: `Over ${yearsInIndustry()} years of industry experience`,
    desc: `Established in ${FOUNDED_YEAR}, we have spent two decades delivering technical and contracting work across Nigerian industry.`,
  },
  {
    src: about2,
    title: "Skilled and dedicated workforce",
    desc: "Certified engineers, tradesmen and operatives who know industrial sites, and who are screened before they are deployed to yours.",
  },
  {
    src: about3,
    title: "Professional and timely project execution",
    desc: "Scopes planned around your operating windows and delivered to the date agreed, not the date it becomes convenient.",
  },
  {
    src: about4,
    title: "Commitment to safety and quality standards",
    desc: "We work to recognised safety and quality standards on every site, because a job delivered unsafely is a job we failed.",
  },
  {
    src: about5,
    title: "Reliable support for shutdown operations",
    desc: "Planned and emergency shutdown crews mobilised at short notice, with the discipline to bring the plant back up on schedule.",
  },
  {
    src: about6,
    title: "Comprehensive solutions",
    desc: "Electrical, mechanical, civil, labour supply and environmental work under one contract - one point of responsibility instead of five.",
  },
];

const ChooseUs = () => {
  return (
    <Flex
      w={{ base: "90%", md: "85%", lg: "70%" }}
      cursor="pointer"
      mt={{ base: "8vh", md: "10vh" }}
      direction="column"
      justifySelf={"center"}
    >
      <Flex direction="column">
        <Text
          color="primary.500"
          fontWeight={"bold"}
          fontSize={{ base: "x-large", md: "xx-large" }}
        >
          WHY CHOOSE US ?
        </Text>
        <Text mt={{ base: "6", md: 8 }} color="gray.800">
          We don’t just provide services; we deliver value, reliability, and
          long-term partnerships.
        </Text>
      </Flex>
      <SimpleGrid
        mb="10vh"
        columns={{ base: 1, md: 2, lg: 3 }}
        mt={{ base: 5, md: 10 }}
      >
        {REASONS.map((reason) => (
          <ServiceCard
            key={reason.title}
            src={reason.src}
            title={reason.title}
            desc={reason.desc}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ChooseUs;
