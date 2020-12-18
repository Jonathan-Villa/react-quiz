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
    backgroundColor: "#343a40",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#343a40"
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
    backgroundColor: "#343a40",

    width: drawerWidth,
  },
  links: {
    textDecoration: "none",
    color: "#ffff",
    fontSize: '17px',
    height: '30px',

  }
}));

export default navBarStyles;
