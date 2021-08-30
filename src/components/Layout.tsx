import { Box } from "@chakra-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Wrapper, { WrapperProps } from "./Wrapper";

const Layout: React.FC<WrapperProps> = ({ client, refetch, children }) => {
  return (
    <Box h="100%" backgroundColor="#fcfcfc">
      <NavBar />
      <Wrapper client={client} refetch={refetch}>
        {children}
      </Wrapper>
    </Box>
  );
};

export default Layout;
