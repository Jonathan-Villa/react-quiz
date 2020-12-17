import { makeStyles, useTheme } from "@material-ui/core";

const drawerWidth = 200;
const navBarStyles = makeStyles((theme) => ({
  root: {

  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor:"#072ac8",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor:"#072ac8"
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  links: {
    textDecoration: "none",
    color:"black",    
    fontSize: '17px',
    height: '30px',

  }
}));

export default navBarStyles;
