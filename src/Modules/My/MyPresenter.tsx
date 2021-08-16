import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import "./index.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

export default function MyInfo() {
  const classes = useStyles();
  return (
    <Container>
      <h2>내 정보</h2>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Avatar
            className={classes.large}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Box>
        <Box>여자 | 20대 | AZ 백신 | 2일 전</Box>
      </Box>

      <h2>내가 작성한 글</h2>
    </Container>
  );
}
