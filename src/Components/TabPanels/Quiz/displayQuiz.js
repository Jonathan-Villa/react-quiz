import React, { useState, useEffect } from "react";
import {
  Container,
  ListItem,
  List,
  Paper,
  TextField,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { CreateQuiz } from "../CreateQuiz/createQuiz";
import { useSelector } from "react-redux";

function DisplayQuiz() {
  const styles = useStyles();
  const questionsPayload = useSelector(
    (state) => state.quizQuestionReducer.payload
  );

  const [values, setValues] = useState();

  return (
    <Container>
      <Paper className={styles.paper} elevation={3}>
        <div>
          <Typography variant="h4">Quiz</Typography>
        </div>

        <div className={styles.questionsContainer}>
          <Typography variant="h4">Questions</Typography>
          <div className={styles.questionsList} >
          
            {questionsPayload
              ? questionsPayload.questions.map((m, key) => (
                  <div>
                        <hr className={styles.hr} />
                    <ListItem key={key}>
                      <ListItemText>{m.question}</ListItemText>
                    </ListItem>
                  </div>
                ))
              : null}
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export { DisplayQuiz };
