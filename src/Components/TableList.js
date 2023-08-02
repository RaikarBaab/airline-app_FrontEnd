import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function TableList(props) {
  // const [selectedRow, setSelectedRow] = useState(null);
  const { selectedRow, onRowSelect } = props;

  // const handleRowSelection = (rowKey) => {
  //   setSelectedRow(rowKey);
  //   selectedRow=props.selectedRow
  // };
  const handleRowSelection = (rowKey) => {
    onRowSelect(rowKey);
  };

  return (
    <>
      <div className=" container flex flex-col gap-3">
        <Table
          color="primary"
          selectionMode="single"
          aria-label="Example static collection table"
          className="table"
        >
          <TableHeader>
            <TableColumn />
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>State</TableColumn>
            <TableColumn><div className="align-center">Total No. of Flights</div></TableColumn>

          </TableHeader>
          <TableBody>
          <TableRow
              key="1"
              selected={selectedRow === "1"}
              onClick={() => handleRowSelection("1")}
            >
              <TableCell className="align-center">
                <input
                  type="radio"
                  checked={selectedRow === "1"}
                  onChange={() => handleRowSelection("1")}
                />
              </TableCell>
              <TableCell className="align-left">Qatar Airways</TableCell>
              <TableCell className="align-left">qatar@gamil.com</TableCell>
              <TableCell className="align-left">Qatar</TableCell>
              <TableCell className="align-center">10</TableCell>

            </TableRow>
            <TableRow
              key="2"
              selected={selectedRow === "2"}
              onClick={() => handleRowSelection("2")}
            >
              <TableCell className="align-center">
                <input
                  type="radio"
                  checked={selectedRow === "2"}
                  onChange={() => handleRowSelection("2")}
                />
              </TableCell>
              <TableCell className="align-left">United Airlines</TableCell>
              <TableCell className="align-left">united@gmail.com</TableCell>
              <TableCell className="align-left">USA</TableCell>
              <TableCell className="align-center">20</TableCell>

            </TableRow>
            <TableRow
              key="3"
              selected={selectedRow === "3"}
              onClick={() => handleRowSelection("3")}
            >
              <TableCell className="align-center">
                <input
                  type="radio"
                  checked={selectedRow === "3"}
                  onChange={() => handleRowSelection("3")}
                />
              </TableCell>
              <TableCell className="align-left">Delta Airline</TableCell>
              <TableCell className="align-left">delta@gmail.com</TableCell>
              <TableCell className="align-left">UK</TableCell>
              <TableCell className="align-center">30</TableCell>

            </TableRow>
            <TableRow
              key="4"
              selected={selectedRow === "4"}
              onClick={() => handleRowSelection("4")}
            >
              <TableCell className="align-center">
                <input
                  type="radio"
                  checked={selectedRow === "4"}
                  onChange={() => handleRowSelection("4")}
                />
              </TableCell>
              <TableCell className="align-left">Etihad Airways</TableCell>
              <TableCell className="align-left">etihad@gmail.com</TableCell>
              <TableCell className="align-left">UAE</TableCell>
              <TableCell className="align-center">40</TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </div>
      </>
  );
}