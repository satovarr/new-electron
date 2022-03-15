import React, { useMemo, useState, useEffect } from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "../../static/MOCK_DATA";
import { COLUMNS } from "./COLUMNS";
import { Checkbox } from "./Checkbox";
import { ColumnFilter } from "./ColumnFilter";
import './index.css'


const Table = ({
  tabs,
  setTabs,
  activeTab,
  currentTab,
  onFirstTable,
  setTable,
  isFirstTable = true,
  forceUpdate,
}) => {
  // memoizing data, required
  const [data, setData] = useState(MOCK_DATA);
  const columns = useMemo(() => COLUMNS, []);

  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  // table props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowPaths },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const selectedDataPusher = () => {
      if (isFirstTable) {
          tabs[activeTab].selected_ids = selectedFlatRows.map(d => d.original.id)
      } else {
        tabs[activeTab].selected_ids2 = selectedFlatRows.map(d => d.original.id)

      }
  }


  const backButton = (e) => {
    e.preventDefault();
    setTable(true);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit on Tab ", currentTab, " is: ", selectedFlatRows.map(
        d => d.original.id));
        selectedDataPusher();
    if (onFirstTable) {
      setTable(false);
      forceUpdate();
    }
  };

  return (
    <>
      <div
        className="Table"
        style={
          currentTab === activeTab && onFirstTable === isFirstTable
            ? {}
            : { display: "none" }
        }
      >
        <table  {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="back-btn" onClick={backButton}> back </button>
        <button className="submit-btn" onClick={onSubmitHandler}>
          {isFirstTable ? "next" : "submit"}
        </button>
        <pre style={{ display: "none" }}>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </>
  );
};

export default Table;
