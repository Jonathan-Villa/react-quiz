import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { TabList, TabPanel, TabContext } from "@material-ui/lab";
import {useTabStyles} from "./tabStyles"
import { CreateQuiz } from "../TabPanels";

function TabBar({component: Component, component2:Component2 }) {
  const [tabValue, setTabValue] = useState("1");
  const styles = useTabStyles()

  const handleTabChange = (e, newTabVal) => {
    setTabValue(newTabVal);
  };

  return (
    <div className={styles.root} >
      <TabContext value={tabValue}>
        <AppBar className={styles.appBar} position="static">
          <TabList onChange={handleTabChange} aria-label="Create Question">
            <Tab label="Create Question" value="1" />
            <Tab label="Delete Question" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Component/>
        </TabPanel>
        <TabPanel value="2">
          <Component2/>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export { TabBar };
