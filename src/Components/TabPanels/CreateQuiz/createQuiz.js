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

function CreateQuiz(props) {
  const styles = useStyles();
  const [sprintTxt, bindSprintTxt, resetSprintTxt] = useInputs("");
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const dispatch = useDispatch();
  const [txtField, setTxtField] = useState([]);
  const [answers, setAnswers] = useState([]);

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

  console.log(answers);

  const handleClick = () => {
    setClick(() => true);
    setTxtField([
      ...txtField,
      {
        question: "",
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: "",
        correctAnswer: "",
      },
    ]);
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

  console.log(sprintTxt);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      questions: txtField,
      sprint: sprintTxt,
    };
    // store in redux store
    dispatch(submitQuizAction(payload));

    //Clear txt fields
    setTxtField([]);
    resetSprintTxt();
  };

  return (
    <Container className={styles.root} maxWidth="lg">
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
                    <IconButton onClick={() => handleClick()}>
                      <AiFillPlusCircle />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete question">
                    <IconButton onClick={() => handleDecrement()}>
                      <FaTrashAlt />
                    </IconButton>
                  </Tooltip>
                  <hr />
                </div>

                {click
                  ? txtField.map((element, key) => (
                      <Paper
                        elevation={1}
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
                          <div className={styles.answerFieldContainer}>
                            <Typography variant="h6">
                              Enter the possible answers
                            </Typography>

                            <TextField
                              fullWidth={false}
                              onChange={(e) => handleNewTxtFieldChange(e, key)}
                              name="answerOne"
                              value={element.answerOne}
                              className={styles.answerTxt}
                              label="Answers"
                              variant="outlined"
                              size="small"
                              key={key}
                            />
                            <TextField
                              fullWidth={false}
                              onChange={(e) => handleNewTxtFieldChange(e, key)}
                              name="answerTwo"
                              value={element.answerTwo}
                              className={styles.answerTxt}
                              label="Answers"
                              variant="outlined"
                              size="small"
                              key={key}
                            />
                            <TextField
                              fullWidth={false}
                              onChange={(e) => handleNewTxtFieldChange(e, key)}
                              name="answerThree"
                              value={element.answerThree}
                              className={styles.answerTxt}
                              label="Answers"
                              variant="outlined"
                              size="small"
                              key={key}
                            />
                            <TextField
                              fullWidth={false}
                              onChange={(e) => handleNewTxtFieldChange(e, key)}
                              name="answerFour"
                              value={element.answerFour}
                              className={styles.answerTxt}
                              label="Answers"
                              variant="outlined"
                              size="small"
                              key={key}
                            />
                            <hr />
                            <div className={styles.correctAnswerContainer}>
                              <Typography variant="h6">
                                {" "}
                                Enter the correct answer
                              </Typography>
                              <TextField
                                fullWidth={false}
                                onChange={(e) =>
                                  handleNewTxtFieldChange(e, key)
                                }
                                name="correctAnswer"
                                value={element.correctAnswer}
                                className={styles.answerTxt}
                                label="Correct Answer"
                                variant="outlined"
                                size="small"
                                key={key}
                              />
                            </div>
                          </div>
                        </div>
                      </Paper>
                    ))
                  : null}
                {click ? (
                  <div className={styles.btnContainer}>
                    <Button color="primary" variant="outlined" type="POST">
                      Submit
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export { CreateQuiz };
