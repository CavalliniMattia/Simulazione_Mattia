import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      padding="4"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Image
        src="https://bit.ly/dan-abramov"
        alt="Logo"
        boxSize="40px"
        marginRight="4"
      />

      <Text
        justifyContent={"center"}
        align="center"
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
      >
        {title}
      </Text>
      <Button colorScheme="blue">
        <Link to="/">Home Page</Link>
      </Button>
    </Flex>
  );
};

export default Header;
