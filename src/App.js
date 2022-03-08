import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import DEFAULT_TABS from "./static/DEFAULT_TABS";
import Table from "./components/Table";
import Tab from "./components/Tab";
import Nav from "./components/Nav";

function App() {
  const [tabs, setTabs] = useState(DEFAULT_TABS);
  const [activeTab, setActiveTab] = useState(0);

  // force update function
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  //state to check  if the table is the first or second
  const [onFirstTable, setTable] = useState(true);



  const renderTabs = () => {
      return(
          tabs.map((tab, idx)=>(
            <div className="Tab-container" key={idx}> 
                <Tab key={idx} tabs={tabs} setTabs={setTabs} activeTab={activeTab} currentTab = {idx} onFirstTable={onFirstTable} setTable={setTable} forceUpdate={forceUpdate}/> 
            </div>
          ))
      )
  };

  return (
    <div className="app-container">
        <Nav tabs= {tabs} activeTab= {activeTab} setActiveTab = {setActiveTab} forceUpdate={forceUpdate} />
      {renderTabs()}

    </div>
  );
  /*return (
    <div className="format">
        <h1>App</h1>
        {tabs.map((tab, idx) => (
          <div key={idx}>
            id: {tab.index}. selected:
            {tab.selected_ids.map((id) => (
              <div>{id}</div>
            ))}
          </div>
        ))}

      </div>
  );*/
}

export default App;
