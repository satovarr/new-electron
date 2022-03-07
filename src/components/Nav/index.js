import React from "react";

const Nav = ({ tabs, activeTab, setActiveTab, forceUpdate }) => {

  const addTab = () => {
    tabs.push({ index: `${tabs.length + 1}`, selected_ids: [6, 6, 6] });
    forceUpdate();
  };

  return (
    <div className="Nav">
      <ul className="nav nav-tabs">
        {tabs.map((tab, idx) => (
          <li className="nav-item" key={idx}>
            <a
              className={`nav-link ${idx === activeTab ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab(idx)}
            >
              Tab {tab.index}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => addTab()}>
            New Tab
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
