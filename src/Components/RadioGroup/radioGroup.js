import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import "./style.css"

function RadioButtonComponet(props) {
  const { question, answerOne, answerTwo, answerThree, answerFour } = props;
  const styles = useStyles();

  const handleChange = (e) => {
    props.selectValue(e.target.value);
  };

  return (
    <Paper id="paper" className={styles.root} elevation={3}>
      <FormControl className={styles.formControl} component="fieldset">
        <Typography className={styles.heading} variant="h4">
          {question}
        </Typography>
        <RadioGroup className={styles.radioGroup} aria-label="gender" name="answers" onChange={handleChange}>
          <FormControlLabel
            value={answerOne}
            control={<Radio />}
            label={answerOne}
          />
          <FormControlLabel
            value={answerTwo}
            control={<Radio />}
            label={answerTwo}
          />
          <FormControlLabel
            value={answerThree}
            control={<Radio />}
            label={answerThree}
          />
          <FormControlLabel
            value={answerFour}
            control={<Radio />}
            label={answerFour}
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}

export { RadioButtonComponet };
