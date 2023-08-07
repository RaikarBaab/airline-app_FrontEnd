import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Button,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
// import { columns } from "../TestData/data";

const columns = [
  { name: "Airline", uid: "airline" },
  { name: "Departure Time", uid: "departureTime" },
  { name: "Arrival Time", uid: "arrivalTime" },
  //   { name: "Duration", uid: "duration" },
  { name: "Origin", uid: "origin" },
  { name: "Destination", uid: "destination" },
  { name: "Reservation", uid: "reservations" },
  { name: "Actions", uid: "actions" },
];

export default function SearchFlightsTable({ flightData }) {
  const renderCell = React.useCallback((flight, columnKey) => {
    switch (columnKey) {
      case "airline":
        return (
          //   <User
          //     avatarProps={{radius: "lg", src: user.avatar}}
          //     description={user.email}
          //     name={cellValue}
          //   >
          //     {user.email}
          //   </User>
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{flight["airline"]}</p>
          </div>
        );
      case "departureTime":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {flight["departureDate"]}
            </p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p> */}
          </div>
        );
      case "arrivalTime":
        return (
          <p>{flight["arrivalDate"]}</p>
          //   <Chip
          //     className="capitalize"
          //     color={statusColorMap[user.status]}
          //     size="sm"
          //     variant="flat"
          //   >
          //     {cellValue}
          //   </Chip>
        );
      case "duration":
        return (
          <p>{flight["arrivalDate"]}</p>

          //   <Chip
          //     className="capitalize"
          //     color={statusColorMap[user.status]}
          //     size="sm"
          //     variant="flat"
          //   >
          //     {cellValue}
          //   </Chip>
        );
      case "origin":
        return (
          <p>{flight["departsFrom"]}</p>

          //   <Chip
          //     className="capitalize"
          //     color={statusColorMap[user.status]}
          //     size="sm"
          //     variant="flat"
          //   >
          //     {cellValue}
          //   </Chip>
        );
      case "destination":
        return (
          <p>{flight["arrivesAt"]}</p>

          //   <Chip
          //     className="capitalize"
          //     color={statusColorMap[user.status]}
          //     size="sm"
          //     variant="flat"
          //   >
          //     {cellValue}
          //   </Chip>
        );
      case "reservations":
        return (
          <Chip
            className="capitalize"
            color={
              flight["reserved"] == flight["capacity"] ? "danger" : "success"
            }
            size="sm"
            variant="flat"
          >
            {flight["reserved"]}/{flight["capacity"]}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              {/* <EditIcon /> */}
              {/*//? reserve button, hidden if reservation = capacity, navigates to reservation page with flight code */}
              {flight["reserved"] == flight["capacity"]}
              <Button
                variant="solid"
                radius="full"
                color="success"
                isDisabled={flight["reserved"] == flight["capacity"]}
                // onClick={}
              >
                Reserve Seat
              </Button>
            </span>
          </div>
        );
      default:
        return "";
    }
  }, []);

  return (
    <Table
      aria-label="Table with custom cells"
      className="table"
      style={{ marginBottom: "50px" }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "end" : "center"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={flightData}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => {
              //   console.log(columnKey);
              return <TableCell>{renderCell(item, columnKey)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
