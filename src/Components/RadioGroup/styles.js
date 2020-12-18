import {makeStyles} from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    root: {
        width:"100%",
        display:"flex",
        flexDirection:"column",
        margin:"20px 10px",

    },
    formControl:{
        padding:"10px"
    },
    radioGroup:{
        marginLeft: theme.spacing(2)
    },
    heading:{
        margin: theme.spacing(1),
    }
}))