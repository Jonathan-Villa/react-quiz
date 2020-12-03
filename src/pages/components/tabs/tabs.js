import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { TabList, TabPanel, TabContext } from "@material-ui/lab";
import {useTabStyles} from "./tabStyles"

function TabBar() {
  const [tabValue, setTabValue] = useState("1");
  const styles = useTabStyles()

  const handleTabChange = (e, newTabVal) => {
    setTabValue(newTabVal);
  };

  return (
    <div className={styles.root} >
      <TabContext value={tabValue}>
        <AppBar  position="static">
          <TabList onChange={handleTabChange} aria-label="Create Question">
            <Tab label="Create Question" value="1" />
            <Tab label="Delete Question" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <h1>Create Component</h1>
        </TabPanel>
        <TabPanel value="2">
          <h1>Delete Component</h1>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export { TabBar };
