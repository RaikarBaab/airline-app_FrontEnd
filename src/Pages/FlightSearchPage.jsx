import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import InputDropdown from "../Components/InputDropdown";
import SearchFlightsTable from "../Components/SearchFlightsTable";
import { SearchIcon } from "../Components/SearchIcon";
import { flights } from "../TestData/data";

export default function FlightSearchPage() {
  //   fetch list of airports
  let data = [
    { key: "1", label: "GoaGoaG aGGGG" },
    { key: "2", label: "Mumbai" },
    { key: "3", label: "Delhi" },
    { key: "4", label: "New York" },
  ];

  const [origin, setOrigin] = useState(new Set([data[0].label]));
  const [destination, setDestination] = useState(new Set(data[0].label));
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // console.log(event.target.value)
  };

  function searchFlights() {
    console.log([...origin][0], [...destination][0]);
    // check of origin = destination
    // make search api call here
  }

  return (
    <>
      {/* search bar */}
      <div className="flight-search-bar">
        <div
          style={{ display: "flex", alignItems: "baseline", width: "270px" }}
        >
          <p style={{ margin: "0px 5px" }}>Where From?</p>
          <InputDropdown
            // label="Where from?"
            values={data}
            selectedValueRef={origin}
            setSelectedValueRef={setOrigin}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "baseline", width: "270px" }}
        >
          <p style={{ margin: "0px 5px" }}>Where To?</p>
          <InputDropdown
            // label="Where from?"
            values={data}
            selectedValueRef={destination}
            setSelectedValueRef={setDestination}
          />
        </div>
        <div className="calender">
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <Button
          color="primary"
          variant="bordered"
          size="md"
          startContent={<SearchIcon />}
          onClick={searchFlights}
        >
          <p style={{ fontSize: "16px" }}>Search</p>
        </Button>
      </div>

      {/* search results table */}
      <SearchFlightsTable flightData={flights} />
    </>
  );
}
