import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import engineer from "../assets/enginnerimage.jpeg";
const testimonials = [
  {
    name: "John Doe",
    role: "Office Manager",
    text: "They completely transformed our office environment. The attention to detail was impressive, from spotless desks to polished floors. Their professionalism and reliability make them my go-to for any cleaning needs.",
    image: engineer,
  },
  {
    name: "Jane Smith",
    role: "Industrial Supervisor",
    text: "Managing an industrial site comes with unique challenges, but their cleaning team handles it flawlessly. They are punctual, use high-quality equipment, and ensure every corner meets health and safety standards.",
    image: engineer,
  },
  {
    name: "Michael Johnson",
    role: "Business Owner",
    text: "Running a business is stressful enough, but I never have to worry about cleanliness thanks to their services. My clients always comment on how fresh and professional the space looks. Truly a partner I can rely on.",
    image: engineer,
  },
  {
    name: "Sarah Williams",
    role: "Facility Director",
    text: "I appreciate their eco-friendly cleaning products and sustainable approach. The team is well-trained, friendly, and extremely thorough. They consistently deliver beyond expectations.",
    image: engineer,
  },
];

export default function TestimonialMarquee() {
  return (
    <Box data-aos="slide-left" w="100%" py={10} bg="gray.50" mt="5vh">
      <Flex
        data-aos="fade-up"
        direction="column"
        w={{ base: "90%", md: "85%", lg: "70%" }}
        mt={{ base: "6vh", md: "8vh", lg: "10vh" }}
        justifySelf="center"
      >
        <Heading
          fontSize={{ base: "x-large", md: "xx-large", lg: "xx-large" }}
          mb={8}
          color="primary.500"
        >
          TESTIMONIALS
        </Heading>
        <Text color="gray.900" mb={{ base: "8", md: "10" }}>
          Hear from our clients who trust us to keep their spaces spotless.
        </Text>
      </Flex>
      <Flex justifySelf="center" w={{ base: "100%", md: "80%" }} mb="5vh">
        <Marquee pauseOnHover gradient={false} speed={50}>
          {testimonials.map((t, index) => (
            <Flex
              key={index}
              align="center"
              mx={6}
              p={6}
              bg="white"
              rounded="2xl"
              boxShadow="md"
              minW="350px"
              maxW="400px"
            >
              <Image
                src={t.image}
                alt={t.name}
                boxSize="120px"
                borderRadius="full"
                mr={4}
              />
              <Box>
                <Text fontWeight="bold">{t.name}</Text>
                <Text fontSize="sm" color="primary.400" mb={3}>
                  {t.role}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {t.text}
                </Text>
              </Box>
            </Flex>
          ))}
        </Marquee>
      </Flex>
    </Box>
  );
}
