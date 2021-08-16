import React from "react";
import BarChart from "./BarChart";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
const Presenter = () => {
  return (
    <Container maxWidth="sm">
      <Box maxWidth="600px">
        <BarChart />
      </Box>
    </Container>
  );
};
export default Presenter;
