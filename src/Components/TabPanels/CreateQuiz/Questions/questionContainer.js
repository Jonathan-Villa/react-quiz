import React, {useState} from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { questions} from "./typeQuestions"
function QuestionContainer(props) {

  
  const [anchorEl, setAnchorEl] = useState();

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    props.typeQuestion(e.type)
  };


  return (
    <div>
      <Button
        arias-aria-haspopup="true"
        onClick={handleMenuClick}
        aria-controls="menu-questions"
        variant="outlined"
        color="primary"
        size="small"
      >
        Question Type
      </Button>
      <Menu
        id="menu-questions"
        onClose={handleMenuClose}
        keepMounted
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
      >
        {questions.map((m, key) => (
          <MenuItem  key={key} dense onClick={()=> handleMenuClose(m)}>
            {m.type}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export { QuestionContainer };
