import * as M from "@material-ui/core";
import navBarStyles from "./stylesComponents/navbarStyles";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import NavItems from "./navitems";

function Navbar(props) {
  const styles = navBarStyles();
  const theme = M.useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.root}>
      <M.AppBar position="static" className={styles.appBar}>
        <M.Toolbar>
          <M.IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <GrMenu />
          </M.IconButton>
          <h3>Abraca-heresAQuiz</h3>
        </M.Toolbar>
      </M.AppBar>

      <nav className={styles.drawer} aria-label="mailbox folders">
        <M.Hidden smUp implementation="css">
          <M.Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <NavItems />
          </M.Drawer>
        </M.Hidden>
        <M.Hidden xsDown implementation="css">
          <M.Drawer
            classes={{
              paper: styles.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <NavItems />
          </M.Drawer>
        </M.Hidden>
      </nav>
    </div>
  );
}

export default Navbar;
