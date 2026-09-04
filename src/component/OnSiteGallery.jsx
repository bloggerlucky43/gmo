import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";

import kerbPaintingCrew from "../assets/site/kerb-painting-crew.webp";
import kerbDemarcation from "../assets/site/kerb-demarcation.webp";
import plantYardDemarcation from "../assets/site/plant-yard-demarcation.webp";
import plantRoadConveyors from "../assets/site/plant-road-conveyors.webp";
import cementSilos from "../assets/site/cement-silos.webp";
import treeSeedlingNursery from "../assets/site/tree-seedling-nursery.webp";

/*  ============================================================
 *  THE COMPANY'S OWN SITE PHOTOGRAPHY
 *  ============================================================
 *  These six are real photographs supplied by the company - the first real work
 *  photography anywhere on this site. Almost everything else in src/assets/ is
 *  stock or stand-in imagery, so treat this folder as the good stuff.
 *
 *  ON THE OWNER'S INSTRUCTION, NO CLIENT IS NAMED HERE. The provenance the
 *  company is willing to state - cement-plant contracts in Ogun State - is given
 *  ONCE, in the section subtitle. Each `caption` then describes only what is
 *  visibly inside its own frame and claims nothing about which contract it came
 *  from, when, or for whom.
 *
 *  Keep that split if you add photographs: shared context belongs in the
 *  subtitle, never in a caption as a client attribution. It is the difference
 *  between "here is the kind of work we do" and a claim about a named contract
 *  that nobody has cleared.
 *
 *  `alt` carries the visible detail for a screen reader rather than repeating
 *  the caption, since the caption is already on the page as readable text.
 *  ============================================================ */
const PHOTOS = [
  {
    src: kerbPaintingCrew,
    caption: "Kerb painting and walkway demarcation in progress",
    alt: "An operative in a hi-vis vest, hard hat and gloves using a roller to paint a kerb in safety yellow, a paint tin beside him and further crew working further up the road",
  },
  {
    src: treeSeedlingNursery,
    caption: "Tree seedlings raised on site for replanting",
    alt: "Several hundred young tree seedlings in black nursery bags, laid out in rows on bare ground beside larger planted containers",
  },
  {
    src: plantRoadConveyors,
    caption: "Plant access road beneath the conveyor gantries",
    alt: "A wide concrete access road running beneath elevated conveyor gantries between plant buildings, edged with black-and-yellow painted kerbs",
  },
  {
    src: kerbDemarcation,
    caption: "Completed black-and-yellow demarcation along a plant roadway",
    alt: "A long concrete kerb freshly painted in alternating black and yellow blocks, running into the distance beside a plant building with a wheel loader parked behind",
  },
  {
    src: cementSilos,
    caption: "Storage silos and access stairways",
    alt: "Tall cement storage silos photographed from ground level, a steel access stairway climbing the full height of the nearest silo",
  },
  {
    src: plantYardDemarcation,
    caption: "Demarcated yard edging beside a plant building",
    alt: "A painted black-and-yellow kerb enclosing a grassed area between a plant building and an access road, an operative in hi-vis walking past conveyor structures behind",
  },
];

export default function OnSiteGallery({ showHeading = true, bg = "white" }) {
  return (
    <Box as="section" w="100%" bg={bg} py={{ base: 16, md: 24 }} id="on-site">
      <Box w={{ base: "90%", md: "85%", lg: "70%" }} mx="auto">
        {showHeading && (
          <SectionHeading
            eyebrow="On site"
            title="Photographs from the job"
            subtitle="Our own pictures from contracts in Ogun State - civil works, safety demarcation and the vegetation side of the work, photographed as it was carried out."
          />
        )}

        <Box
          data-aos="fade-up"
          css={{
            "--swiper-theme-color": "#ff6600",
            "--swiper-navigation-size": "24px",
            /* Room under the slides for the pagination bullets. */
            ".swiper": { paddingBottom: "48px" },
            ".swiper-pagination": { bottom: "0" },
            /* Slides are flex children so every card in a row matches the
             * tallest, regardless of how long its caption runs. */
            ".swiper-slide": { height: "auto", display: "flex" },
            /* Arrows overlay the photos on wider screens; on a phone they would
             * cover too much of the image, and swiping is the obvious gesture
             * there anyway. */
            "@media (max-width: 480px)": {
              ".swiper-button-next, .swiper-button-prev": { display: "none" },
            },
          }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {PHOTOS.map((photo) => (
              <SwiperSlide key={photo.caption}>
                <Flex
                  direction="column"
                  w="100%"
                  bg="white"
                  rounded="xl"
                  overflow="hidden"
                  borderWidth="1px"
                  borderColor="gray.200"
                  boxShadow="sm"
                >
                  {/* Fixed height plus cover normalises a set that runs from
                      0.75 portrait to 1.67 landscape. */}
                  <Box
                    h={{ base: "220px", md: "260px" }}
                    overflow="hidden"
                    flexShrink={0}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </Box>

                  <Box
                    p={{ base: 4, md: 5 }}
                    flex="1"
                    borderTopWidth="3px"
                    borderTopColor="orange.500"
                  >
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      {photo.caption}
                    </Text>
                  </Box>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
