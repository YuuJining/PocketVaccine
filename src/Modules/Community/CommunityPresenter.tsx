import React from "react";
import ReviewList from "./ReviewList";
import Box from "@material-ui/core/Box";
import { maxWidth } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import "./index.css";

const CommunityPresenter = () => {
  return (
    <Container maxWidth="sm">
      <ReviewList></ReviewList>
    </Container>
  );
};

export default CommunityPresenter;
