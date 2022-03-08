import React from "react";
import Table from "../Table";

const Tab = ({ tabs, setTabs, activeTab, currentTab, onFirstTable, setTable, forceUpdate}) => {

    

    return(
        <div className="Tab">
            
            <Table tabs={tabs} setTabs={setTabs} activeTab= {activeTab} currentTab={currentTab} onFirstTable={onFirstTable} setTable={setTable} forceUpdate={forceUpdate}/>
            
            <Table tabs={tabs} setTabs={setTabs} activeTab= {activeTab} currentTab={currentTab} onFirstTable={onFirstTable} setTable={setTable} forceUpdate={forceUpdate} isFirstTable={false}/>

            
        </div>
    )
}

export default Tab;