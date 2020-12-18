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
import {RadioButtonComponet} from "../../RadioGroup/radioGroup"
function DisplayQuiz() {
  const styles = useStyles();
  const questionsPayload = useSelector(
    (state) => state.quizQuestionReducer.payload
  );
  const [numQuestions, setNumQuestions] = useState();
  const [values, setValue] = useState();

  console.log(values)

  return (
    <Container>
      <Paper className={styles.paper} elevation={0}>
        <div>
          <Typography variant="h4">Quiz</Typography>
          <Typography variant="h6" > Sprint: {questionsPayload.sprint}</Typography>
        </div>

        <div className={styles.questionsRoot}>
          <Typography variant="h4">Questions</Typography>
          <div className={styles.questionsList} >
          
            {questionsPayload
              ? questionsPayload.questions.map((m, key) => (
                  <div className={styles.questionsContainer} key={key}>  
                  <hr/>
                    <div className={styles.radioGroup}>
                      <RadioButtonComponet 
                      selectValue={setValue} 
                      question={m.question} 
                      answerOne={m.answerOne} 
                      answerTwo={m.answerTwo} 
                      answerThree={m.answerThree}
                      answerFour={m.answerFour}/>
                    </div>

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
