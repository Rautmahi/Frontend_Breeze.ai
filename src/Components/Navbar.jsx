import { HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack  h="50px" w={{sm:"100%",md:"100%",lg:"100%"}} bg="teal" justifyContent="space-between" pr="20px">
        <Link to="/">
            <HStack ml="12px">
                      <Heading fontSize={{sm:"15px",md:"25px",lg:"30px"}}   color="white"> Breeze.ai</Heading>
        </HStack>
        </Link>
        <br />
        <Link to="/Home">
        <Heading fontSize={{sm:"10px",md:"20px",lg:"30px"}}  color="white"> Home-Page</Heading>
        </Link>
      </HStack>
    </>
  );
};

export default Navbar;
