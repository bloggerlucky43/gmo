import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { preload } from "react-dom";
import "swiper/css";
import "swiper/css/pagination";
import eng from "../assets/eng.webp";
import home1 from "../assets/home1.webp";
import warehouse from "../assets/warehouse.webp";

// The first slide is rendered as a CSS background-image, which the browser
// cannot discover until it has parsed the CSS and run layout. Preloading it
// lets the request start immediately, which is what the LCP measures here.
preload(home1, { as: "image", fetchPriority: "high" });
const slides = [
  {
    src: home1,
    title: "Reliable Industrial Installations",
    desc: "From heavy-duty electrical wiring to complex mechanical setups, we provide end-to-end installation services that meet the highest safety and performance standards. Our team ensures your facilities are built to last with efficiency and reliability in mind.",
    cta: "Learn More",
  },
  {
    src: eng,
    title: "Need Skilled Labour or Equipment Fast?",
    desc: "We connect you with trained professionals and modern equipment to keep your operations running smoothly. Whether you need short-term staffing, specialized tools, or large-scale equipment, we deliver dependable solutions exactly when you need them.",
    cta: "Contact Us",
  },
  {
    src: warehouse,
    title: "Shutdown Support You Can Schedule Around",
    desc: "Planned and emergency shutdown services delivered inside the window you give us — electrical, mechanical and civil crews working to one programme. We have done it for a multinational cement producer, and the test is always the same: does the plant come back up on time, and safely?",
    cta: "Get a Quote",
  },
];

export default function Carousel() {
  const navigate = useNavigate();
  return (
    <Box mt="8vh" data-aos="fade-up">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Box
              w="100%"
              h={{ base: "350px", md: "400px", lg: "600px" }}
              bgImage={`url(${slide.src})`}
              bgSize="cover"
              bgPosition="center"
              position="relative"
              overflow="hidden"
            >
              {/* Blue overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="primary.700"
                opacity={0.8}
              />

              {/* Content */}
              <Flex
                position="relative"
                zIndex={1}
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                textAlign="center"
                px={4}
              >
                <Text
                  fontSize={{ base: "lg", md: "3xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={4}
                >
                  {slide.title}
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "lg" }}
                  color="white"
                  mb={6}
                  maxW="600px"
                >
                  {slide.desc}
                </Text>
                <Button
                  size="lg"
                  bg="orange.400"
                  color="white"
                  _hover={{ bg: "orange.500" }}
                  onClick={() => navigate("/services")}
                >
                  {slide.cta}
                </Button>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
