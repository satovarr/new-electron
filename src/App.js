import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import DEFAULT_TABS from "./static/DEFAULT_TABS";
import SelectedWindow from "./components/SelectedWindow";
import Tab from "./components/Tab";
import Nav from "./components/Nav";
import "./index.css";

function App() {
  const [tabs, setTabs] = useState(DEFAULT_TABS);
  const [activeTab, setActiveTab] = useState(0);

  // force update function
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  //state to check  if the table is the first or second
  const [onFirstTable, setTable] = useState(true);

  //function that renders
  const renderTabs = () => {
    return tabs.map((tab, idx) => (
      <div className="Tab-container" key={idx}>
        <Tab
          className="Table"
          key={idx}
          tabs={tabs}
          setTabs={setTabs}
          activeTab={activeTab}
          currentTab={idx}
          onFirstTable={onFirstTable}
          setTable={setTable}
          forceUpdate={forceUpdate}
        />
      </div>
    ));
  };

  return (
    <div className="app-container">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/second">Second</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Nav
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              forceUpdate={forceUpdate}
            />
            {renderTabs()}
          </Route>
          <Route path="/second">

            <SelectedWindow onFirstTable={ onFirstTable } tabs={ tabs } />

          </Route>
        </Switch>
      </Router>
    </div>
  );}

export default App;
