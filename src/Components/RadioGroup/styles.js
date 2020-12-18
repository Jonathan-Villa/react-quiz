import {makeStyles} from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    root: {
        width:"100%",
        display:"flex",
        flexDirection:"column",
    },
    heading:{
        marginTop: theme.spacing(3)
    }
}))