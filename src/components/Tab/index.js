import React, { useState, useEffect } from "react";
import Table from "../Table";
import MOCK_JSON from "../../static/MOCK_JSON.json";


const Tab = ({
key,
tabs,
setTabs,
activeTab,
currentTab,
onFirstTable,
setTable,
forceUpdate}) => {

    const [search, setSearch] = useState("");
    const [idsResult, setIdResult] = useState([]);

    const doFilter = (val) => {
        if (search === "") {
            return val
        } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
            return val
        }
        else if (val.id.toString().includes(search.toLowerCase())) {
            return val
        }
    }

    useEffect(() => {
        let filter = MOCK_JSON.filter((val) => doFilter(val));
        const result = [];
        filter.map((obj, i) => {
            result.push(obj.id.toString())
        })
        setIdResult(result)
    }, [search]);

    return (
        <div className="Tab" style={currentTab === activeTab ? {} : { display: "none" }}>
            {//searchbar
            }
            <div className="input-group rounded" style={{ width: "80%", margin: "0 auto", paddingTop: "40px" }}>
                <input onChange={e => { setSearch(e.target.value) }} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
            
            {idsResult.map((val, key) => (
                <div className="user" key={key}>
                    <p>{val.first_name}</p>
                </div>))
            }

            {//First and second table
            }
            <Table activeTab={activeTab} currentTab={currentTab} onFirstTable={onFirstTable} setTable={setTable} idsResult={idsResult} forceUpdate={forceUpdate} tabs={tabs} />

            <Table activeTab={activeTab} currentTab={currentTab} onFirstTable={onFirstTable} setTable={setTable} idsResult={idsResult} forceUpdate={forceUpdate}  tabs={tabs} isFirstTable={false} />


        </div>
    )
}

export default Tab;