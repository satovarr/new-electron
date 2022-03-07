import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import DEFAULT_TABS from "./static/DEFAULT_TABS";

function App() {
  const [tabs, setTabs] = useState({});

  return (
    <div className="app-container">
      hola
      {DEFAULT_TABS().map((tab, idx) => {
          return(
        <h1 key={idx}> {tab.selected_ids[1]} </h1>
      )})}
    </div>
  );
}

export default App;
