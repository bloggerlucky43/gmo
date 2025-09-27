import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import eng from "../assets/eng.jpg";
import building from "../assets/building.jpg";
const slides = [
  {
    src: building,
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
    src: eng,
    title: "Industrial Cleaning & Site Maintenance",
    desc: "Our industrial cleaning services go beyond the basics — we handle machinery, warehouses, and construction sites with precision and care. Combined with vegetation clearance and water sanitation, we create safe, productive environments for your workforce.",
    cta: "Get a Quote",
  },
];

export default function Carousel() {
  return (
    <Box mt="8vh">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
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
                opacity={0.85}
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
