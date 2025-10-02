import { Flex } from "@chakra-ui/react";
import TextType from "./stylings/TextType";
import "./stylings/TextType.css";
export const PageLoader = () => {
  return (
    <Flex justify="center" zIndex={2} align="center" minH="100vh">
      <TextType
        text={["GMO"]}
        typingSpeed={50}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="."
        textColors={["orange"]}
      />
    </Flex>
  );
};
