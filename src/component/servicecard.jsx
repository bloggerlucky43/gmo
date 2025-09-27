import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function ServiceCard({ src, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <Box
      position="relative"
      w={{ base: "100%", md: "300px" }}
      h="250px"
      overflow="hidden"
      boxShadow="xl"
      cursor="pointer"
      mt={8}
      role="group"
      onClick={handleToggle}
      _hover={{
        "& .overlay": { height: "100%", justifyContent: "center" },
        "& .cardImg": { transform: "scale(1.08)" },
        "& .cardText": { opacity: 1, transform: "translateY(0)" },
        "& .cardBtn": { opacity: 1, transform: "translateY(0)" },
      }}
    >
      {/* Image */}
      <Image
        className="cardImg"
        src={src}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        transition="0.4s"
        loading="lazy"
      />

      {/* Overlay */}
      <Box
        className="overlay"
        position="absolute"
        bottom="0"
        w="100%"
        h={isOpen ? "100%" : "25%"}
        bg="rgba(0, 37, 64, 0.75)"
        color="white"
        display="flex"
        alignItems={isOpen ? "center" : "flex-start"}
        justifyContent={isOpen ? "center" : "flex-start"}
        px={3}
        // textAlign="center"
        transition="0.4s"
        flexDirection="column"
        borderLeft={"solid 2px"}
        borderColor="orange.500"
      >
        <Text
          fontWeight="bold"
          fontSize="md"
          // transform="translateY(10px)"
          color="whiteAlpha.900"
          mt={2}
        >
          {title}
        </Text>

        <Text
          className="cardText"
          mt={2}
          fontSize="sm"
          opacity={isOpen ? 1 : 0}
          transform={isOpen ? "translateY(0)" : "translateY(10px)"}
          transition="0.4s"
        >
          {desc}
        </Text>

        <Button
          className="cardBtn"
          mt={3}
          size="sm"
          bg="orange.400"
          color="white"
          _hover={{ bg: "orange.500" }}
          opacity={isOpen ? 1 : 0}
          transform={isOpen ? "translateY(0)" : "translateY(10px)"}
          transition="0.4s"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
