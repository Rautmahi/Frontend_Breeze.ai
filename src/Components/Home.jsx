import { Box, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
 
  const ref = useRef(null);
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const { auth } = context;
  console.log(auth);
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
    return () => {
      clearInterval(ref.current);
    };
  }, []);




  return (
    <>
      <Box m="auto" mt="50px" textAlign="center">
        <Heading>Hello World!</Heading>        
      </Box>
    </>
  );
};

export default Home;
