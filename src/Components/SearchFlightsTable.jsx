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
// import { columns s} from "../TestData/data";

const columns = [
  { name: "Airline", uid: "airline" },
  { name: "Departure Date", uid: "departureDate" },
  { name: "Arrival Date", uid: "arrivalDate" },
  //   { name: "Duration", uid: "duration" },
  { name: "Origin", uid: "origin" },
  { name: "Destination", uid: "destination" },
  { name: "Reservation", uid: "reservations" },
  // { name: "Actions", uid: "actions" },
];

export default function SearchFlightsTable({ flightData }) {
  function navigateToFlightReservationpage(flightId) {
    // TODO navigate to reservations list page with :flightId
    console.log(flightId);
  }

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
            <p className="text-bold text-sm capitalize">{flight["name"]}</p>
          </div>
        );
      case "departureDate":
        return <p>{flight["departureDate"]}</p>;
      case "arrivalDate":
        return <p>{flight["arrivalDate"]}</p>;
      case "duration":
        return <p>{flight["arrivalDate"]}</p>;
      case "origin":
        return <p>{flight["departsFrom"]}</p>;
      case "destination":
        return <p>{flight["arrivesAt"]}</p>;
      case "reservations":
        return (
          <Chip
            className="capitalize"
            color={
              flight["reserved"] === flight["capacity"] ? "danger" : "success"
            }
            size="sm"
            variant="flat"
          >
            {flight["reservations"].length}/{flight["capacity"]}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              {/*//? reserve button, show at capacity button if reservation = capacity, navigates to reservation page with flight code */}
              {flight["reserved"] === flight["capacity"] ? (
                <Button
                  variant="solid"
                  radius="full"
                  // color="danger"
                  style={{ backgroundColor: "#FA2C2C", color: "white" }}
                >
                  At Capacity
                </Button>
              ) : (
                <Button
                  variant="solid"
                  radius="full"
                  color="success"
                  style={{ color: "white" }}
                  onClick={() => navigateToFlightReservationpage(flight["id"])}
                >
                  Reserve Seat
                </Button>
              )}
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
      fullWidth={true}
      //   removeWrapper={true}
      //   style={{ marginBottom: "5px" }}
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
      <TableBody emptyContent={"No flights found"} items={flightData}>
        {(item) => {
          // console.log(item)
          return (
            <TableRow key={item._id}>
              {(columnKey) => {
                //   console.log(columnKey);
                return <TableCell>{renderCell(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
