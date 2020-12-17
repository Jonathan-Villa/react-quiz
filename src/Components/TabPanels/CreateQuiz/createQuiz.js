import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useInputs } from "../../../CustomHooks/useInputs";
import {
  FillInTheBlank,
  MultipleChoice,
  QuestionContainer,
  TrueFalse,
} from "./Questions";

function CreateQuiz() {
  const styles = useStyles();
  const [sprintTxt, bindSprintTxt, resetSprintTxt] = useInputs();
  const [type, setType] = useState();

  const displayQuestionType = (type) => {
    // Based on menu select -- display respective component
    switch (type) {
      case "Multiple Answers":
        return <MultipleChoice />;
      case "True/False":
        return <TrueFalse />;
      case "Fill-in-the-Blank":
        return <FillInTheBlank />;
      default:
        return;
    }
  };

  return (
    <Container className={styles.root} maxWidth="md">
      <Paper className={styles.paper} elevation={3}>
        <form>
          <Typography className={styles.heading} variant="h3">
            Create Quiz
          </Typography>
          <hr />
          <div>
            <Typography variant="h5">Enter the Sprint</Typography>
            <div>
              <TextField
                className={styles.sprintTxt}
                required
                size="small"
                variant="outlined"
                label="Sprint..."
                {...bindSprintTxt}
              />
            </div>
            <hr />
            <div>
              <Typography variant="h5" className={styles.typeQuestion}>
                Questions
              </Typography>
              <div>
                <TextField helperText="Enter the number of questions" />
              </div>

              {/* <QuestionContainer typeQuestion={setType} />
              <div>
                {displayQuestionType(type)}
              </div> */}
            </div>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export { CreateQuiz };
