import React from "react";
import { TabBar } from "../../Components/Tabs/tabs";
import { CreateQuiz } from "../../Components/TabPanels";

function Content() {
  return (
    <div className="main-container">
      <TabBar component={CreateQuiz} />
    </div>
  );
}

export { Content };
