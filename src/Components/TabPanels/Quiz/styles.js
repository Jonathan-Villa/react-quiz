import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {},
  paper: {},
  questionsContainer: {
    display: "flex",
    flexDirection: "column",
    margin:"50px 0px"
  },
  questionsList: {
    display: "flex",
    flexDirection: "column",
  },
}));
