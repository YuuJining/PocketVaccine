import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
const Presenter = () => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" borderBottom={1} m={5} borderColor="grey.200">
        <Box
          display="flex"
          width="50%"
          borderRight={1}
          padding={2}
          borderColor="grey.200"
        >
          <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column">
              <h5>전국 1차 접종</h5>
              <h1>29.3%</h1>
            </Box>
            <Box display="flex" flexDirection="column">
              <p>누적 15,321,321</p>
              <p>신규 23,123</p>
            </Box>
          </Box>
        </Box>
        <Box display="flex" width="50%" padding={2}>
          <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column">
              <h5>전국 1차 접종</h5>
              <h1>9.3%</h1>
            </Box>
            <Box display="flex" flexDirection="column">
              <p>누적 15,321,321</p>
              <p>신규 23,123</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex">{/* 지도 */}</Box>
    </Container>
  );
};
export default Presenter;
