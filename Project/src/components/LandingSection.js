import React from "react";
import { Avatar, Heading, VStack, useMediaQuery } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from "../Asset/image.jpg";

const greeting = "Hello, I am Emmanuel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={isSmallScreen ? 8 : 16}>
        <Avatar
          src={image}
          size={isSmallScreen ? "xl" : "2xl"}
          name="Your Name"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
        <VStack spacing={6}>
          <Heading as="h1" size="3xl" noOfLines={1}>
            {bio1}
          </Heading>
          <Heading as="h1" size="3xl" noOfLines={1}>
            {bio2}
          </Heading>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
