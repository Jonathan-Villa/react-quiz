import * as M from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import navBarStyles from "./stylesComponents/navbarStyles";

function Navitems() {
  const styles = navBarStyles();
  const theme = M.useTheme();

  return (
    <div>
      <div className={styles.toolbar} />
      <M.List>
        {[
          { path: "/home", title: "Home" },
          { path: "/content", title: "Content" },
        ].map((index, key) => (
          <M.ListItem button key={key}>
            <Link className={styles.links} to={index.path}>
              {index.title}
            </Link>
          </M.ListItem>
        ))}
      </M.List>
    </div>
  );
}

export default Navitems;
