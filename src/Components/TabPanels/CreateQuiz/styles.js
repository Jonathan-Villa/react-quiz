import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles((theme)=> ({
    root: { 
        position:"static",
        height:"90vh"
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
        marginTop:"20px",

    },
    questionBtnContainer:{
        width:"100%"
    },
    sprintContainer:{
        margin:"30px 0px",
        width:"90%"

    }, 
    
    createQuestionContainer:{
        width: "80%",
        height:"300px",
        display:"flex",
        flexDirection:"column",
        padding:"20px",
        overflow:"auto",
        marginTop:"20px"
    },
    answersContainer:{

        width:"100%",
        display:"flex",
        flexDirection:"column"
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
        margin:"15px"
    }
}))