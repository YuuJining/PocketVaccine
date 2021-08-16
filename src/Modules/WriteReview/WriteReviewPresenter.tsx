import React from "react";
import "./index.css";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import VaccineTypeSelect from "./VaccineTypeSelect";
import Container from "@material-ui/core/Container";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// function getStyles(
//   name: string,
//   vaccineTypes: { text: string; value: string }[],
//   theme: Theme
// ) {
//   return {
//     fontWeight:
//       vaccineTypes.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },

    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const WriteReviewPresenter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    muscle: false, //근육통
    whirl: false, //어지러움.
    fever: false, //발열
    headache: false, //두통
  });
  const [kind, setKind] = React.useState({
    az: false, //근육통
    ys: false, //어지러움.
    hw: false, //발열
  });
  const [shotCount, shotCountState] = React.useState(0);
  const { muscle, whirl, fever, headache } = state;
  const error = [muscle, whirl, fever, headache].filter((v) => v).length !== 2;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   shotCountState(event.target.name);
  // };

  const vaccineTypes = [
    { text: "화이자", value: "hw" },
    { text: "얀센", value: "ys" },
    { text: "모더나", value: "mo" },
  ];
  return (
    <Container maxWidth="xs">
      <Box maxWidth="600px" width="100%" flexDirection="column">
        <Box display="flex" flexDirection="row" width="100%">
          <Box width="100%">
            <h3>접종 이력</h3>
            <VaccineTypeSelect />
          </Box>
        </Box>
        <Box width="100%">
          <h3>증상</h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={muscle}
                onChange={handleChange}
                name="muscle"
              />
            }
            label="근육통"
          />
          <FormControlLabel
            control={
              <Checkbox checked={whirl} onChange={handleChange} name="whirl" />
            }
            label="어지러움"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fever} onChange={handleChange} name="fever" />
            }
            label="발열"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={headache}
                onChange={handleChange}
                name="headache"
              />
            }
            label="두통"
          />
        </Box>
        <Box width="100%">
          <h3>제목</h3>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className={classes.textField}
          />
        </Box>
        <Box>
          <h3>내용</h3>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={8}
            className={classes.textField}
            variant="outlined"
          />
        </Box>
        <Box m={3}>
          <Button variant="contained" color="primary">
            저장
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default WriteReviewPresenter;
