import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        position: "fixed",
        bottom: "10px",
        right: "10px",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        margin: theme.spacing(1),
      },
    },
  })
);

export default function IconButtons() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        href="#outlined-buttons"
        component={Link}
        to="/write"
      >
        <CreateIcon />
      </Button>
    </Paper>
  );
}
