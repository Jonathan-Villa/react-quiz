import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles((theme)=> ({
    root: { 
        position:"static",
        height:"100vh"
    },
    paper: {
        height:"100%",
        display:"flex",
        flexDirection:"column",
        position:"static",
        overflow:"auto"
    },
    form:{ 
        margin:"20px",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"start",
        alignItems:"center"
        
    },
    questionCreateContainer:{
        marginTop:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    questionBtnContainer:{
        width:"100%",
    },
    sprintContainer:{
        margin:"30px 0px",
        width:"90%"

    }, 
    btnContainer:{
        width: "100%",
        display:"flex",
        margin:"20px",
        flexDirection:"column"
    },
    createQuestionContainer:{
        width: "90%",
        height:"500px",
        display:"flex",
        flexDirection:"column",
        padding:"30px",
        overflow:"auto",
        marginTop:"40px"
    },
    answersContainer:{
        width:"100%",
        height:"700px",
        display:"flex",
        flexDirection:"column"
    },
    answerFieldContainer: {
        display:"flex",
        flexDirection:"column",
        margin:"10px 0px"
    },
    correctAnswerContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        margin: "10px 0px"
    },
    heading:{
        marginTop:"20px"
    },
    sprintTxt: { 
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    txtFieldContainer: { 
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
    },
    questionTxt:{
        margin:"20px 10px"
    },
    answerTxt:{
        margin:"10px"
    }
}))