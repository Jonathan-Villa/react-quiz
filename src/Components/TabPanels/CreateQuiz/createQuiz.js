import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  IconButton,
  Typography,
  Tooltip,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { useInputs } from "../../../CustomHooks/useInputs";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  FillInTheBlank,
  MultipleChoice,
  QuestionContainer,
  TrueFalse,
} from "./Questions";
import { useDispatch } from "react-redux";
import { getNumberOfQuestions } from "../Quiz/displayQuiz";
import { submitQuizAction } from "../../../redux/actions/submitQuiz";

function CreateQuiz() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [sprintTxt, bindSprintTxt, resetSprintTxt] = useInputs("");
  const [click, setClick] = useState(false);
  const [txtField, setTxtField] = useState([]);

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
  const handleClick = () => {
    setClick(() => true);
    setTxtField([...txtField, { question: "", answerOne: "", answerTwo: "", answerThree: "", answerFour: "", correctAnswer: "" }]);
  };

  const handleDecrement = (e) => {
    // copy state
    let copyList = [...txtField];
    // remove 1 element on every click
    copyList.splice(0, 1);
    // restore the state
    setTxtField(copyList);
  };

  const handleNewTxtFieldChange = (e, key) => {
    const values = [...txtField];
    values[key][e.target.name] = e.target.value;
    setTxtField(values);
  };

  console.log(txtField)

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      questions: txtField,
      sprint: sprintTxt
    };
    // store in redux store
    dispatch(submitQuizAction(payload));

    //Clear txt fields
    setTxtField([]);
    resetSprintTxt();
  };


  return (
    <Container className={styles.root} maxWidth="md">
      <Paper className={styles.paper} elevation={0}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Typography className={styles.heading} variant="h3">
            Create Quiz
          </Typography>

          <div className={styles.sprintContainer}>
            <Typography variant="h5">Enter the Sprint</Typography>
            <hr />
            <div>
              <TextField
                type="label"
                className={styles.sprintTxt}
                required
                size="small"
                variant="outlined"
                label="Sprint..."
                {...bindSprintTxt}
              />
            </div>

            <div className={styles.questionCreateContainer}>
              <Typography variant="h5" className={styles.typeQuestion}>
                Questions
              </Typography>

              <div className={styles.txtFieldContainer}>
                <div className={styles.questionBtnContainer}>
                  <Tooltip title="Add new question">
                    <IconButton onClick={handleClick}>
                      <AiFillPlusCircle />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete question">
                    <IconButton onClick={handleDecrement}>
                      <FaTrashAlt />
                    </IconButton>
                  </Tooltip>
                </div>

                {click
                  ? txtField.map((element, key) => (
                    <Paper
                      elevation={3}
                      className={styles.createQuestionContainer}
                    >
                      <Typography variant="h6">Enter the Question</Typography>
                      <TextField
                        key={key}
                        label="Question"
                        size="small"
                        required
                        className={styles.questionTxt}
                        variant="outlined"
                        fullWidth={false}
                        name="question"
                        value={element.question}
                        onChange={(e) => handleNewTxtFieldChange(e, key)}
                      />
                      <hr />
                      <div className={styles.answersContainer}>
                        <div>
                          <Typography variant="h6">
                            Enter the possible answers
                          </Typography>
                          <div className={styles.answersContainer}>
                            <TextField label="Answer1" onChange={(e) => handleNewTxtFieldChange(e, key)} name="answerOne" value={element.answerOne} size="small" color="primary" variant="outlined" />
                            <TextField label="Answer2" onChange={(e) => handleNewTxtFieldChange(e, key)} name="answerTwo" value={element.answerTwo} size="small" color="primary"  variant="outlined" />
                            <TextField label="Answer3" onChange={(e) => handleNewTxtFieldChange(e, key)} name="answerThree" value={element.answerThree} size="small" color="primary"  variant="outlined" />
                            <TextField label="Answer4" onChange={(e) => handleNewTxtFieldChange(e, key)} name="answerFour" value={element.answerFour} size="small" color="primary"  variant="outlined" />
                          </div>
                          <div className={styles.answersContainer}>
                            <Typography>Enter the correct answer</Typography>
                            <TextField label="Correct Answer" variant="outlined" value={element.correctAnswer} size="small" color="primary"  name="correctAnswer" onChange={(e) => handleNewTxtFieldChange(e, key)} />
                          </div>
                        </div>
                      </div>
                    </Paper>
                  ))
                  : null}
              </div>
            </div>
          </div>

          <Button color="primary" variant="outlined" type="POST">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export { CreateQuiz };
