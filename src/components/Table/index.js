import React, { useMemo, useState, useEffect } from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "../../static/MOCK_DATA";
import { COLUMNS } from "./COLUMNS";
import { Checkbox } from "./Checkbox";

const Table = ({ tabs, setTabs, activeTab, currentTab }) => {
  // memoizing data, required
  const [data, setData] = useState(MOCK_DATA);
  const columns = useMemo(() => COLUMNS, []);

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


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit on Tab ", currentTab, " is: ", selectedFlatRows);
  };


  return (
    <div className="Table">
    <button onClick={onSubmitHandler}>SUBMIT</button>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
      <pre>
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
  );
};

export default Table;
