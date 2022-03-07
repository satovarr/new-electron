import React from "react";
import Table from "../Table";

const Tab = ({ tabs, setTabs, activeTab, currentTab, isFirstTable=true}) => {

    

    return(
        <div className="Tab">
            <h1>Tab { tabs[currentTab].index }</h1>
            {tabs[currentTab].selected_ids.map((id) => (
              <div>{id} is {currentTab}</div>
            ))}
            <Table tabs={tabs} setTabs={setTabs} tabactiveTab= {activeTab} currentTab={currentTab}/>
            
            <Table tabs={tabs} setTabs={setTabs} tabactiveTab= {activeTab} currentTab={currentTab} isFirstTable={false} />

            
        </div>
    )
}

export default Tab;