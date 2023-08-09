import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import qs from "qs";
import axios from "axios";
import InputDropdown from "../Components/InputDropdown";
import SearchFlightsTable from "../Components/SearchFlightsTable";
import { SearchIcon } from "../Components/SearchIcon";
import { flights } from "../TestData/data";
import { SearchFlightBanner } from "../Components/SearchFlightBanner";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function FlightSearchPage() {
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);

  //   fetch list of airports
  const data = [
    { key: "1", label: "Bangalore" },
    { key: "2", label: "Mumbai" },
    { key: "3", label: "Delhi" },
    { key: "4", label: "New York" },
  ];

  const [airportList, setAirportList] = useState([]);

  const [fetchedFlights, setFetchedFlights] = useState([]);

  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // console.log(event.target.value);
  };

  useEffect(() => {
    // console.log(airportList)
    setOrigin(new Set([airportList[0]]));
    setDestination(new Set([airportList[0]]));
  }, [airportList]);

  const fetchAirports = async () => {
    // axios({
    //   method: "get",
    //   url: `http://localhost:8000/api/v1/airlines`,
    // })
    //   .then(({ data }) => {
    //     console.log(data.data);
    //     const airportsSet = new Set();
    //     const airlines = data.data;

    //     airlines.forEach((airline) => {
    //       airline.airports.forEach((airport) => {
    //         airportsSet.add(airport.name);
    //       });
    //     });

    //     setAirportList([...airportsSet]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios({
      method: "get",
      url: `http://localhost:8000/api/v1/airports`,
    })
      .then(({ data }) => {
        // console.log(data.airports);
        const airportsSet = new Set();
        const airports = data.airports;

        airports.forEach((airport) => {
          airportsSet.add(airport.name);
          //     airport.airports.forEach((airport) => {
          //     airportsSet.add(airport.name);
          //   });
        });

        setAirportList([...airportsSet]);

        // {
        //     "reservations": [],
        //     "_id": "64d26f14ee85f92f7cdb579c",
        //     "departsFrom": "wjwjw",
        //     "departureDate": "2023-08-08",
        //     "arrivesAt": "wjwj",
        //     "arrivalDate": "2023-08-09",
        //     "make": "wjwj",
        //     "model": "wjwj",
        //     "capacity": 14,
        //     "airline": "64d25251ee85f92f7cdb560e",
        //     "__v": 0
        //   }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchAirline = async(id) => {
    // axios({
    //   method: "get",
    //   url: `http://localhost:8000/api/v1/airlines/${id}`,
    // })
    //   .then((res) => {
    //     console.log(res.data.data.name, "airline name");
    //     return res.data.data.name;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    try {
        const res=await axios.get(`http://localhost:8000/api/v1/airlines/${id}`);
        console.log(res.data,"ailine!!!");
        if(res.data.status=='success')
        return res.data.data.name;
    } catch (error) {
        return null;
    }
   
  };
  const fetchFlights = async () => {
    // console.log({
    //   departsFrom: [...origin][0],
    //   arrivesAt: [...destination][0],
    //   departureDate: selectedDate,
    // });
    axios({
      method: "get",
      url: `http://localhost:8000/api/v1/flights/search?${qs.stringify({
        departsFrom: [...origin][0],
        arrivesAt: [...destination][0],
        departureDate: selectedDate,
      })}`,
    })
      .then((res) => {
        setFetchedFlights(res.data.data);
        // const newArr = [...res.data.data];
        // const newArr=res.data.data.map(async(flight) => {
        //     const airlineName=await fetchAirline(flight?.airline);
        //     console.log(airlineName);
        //     if(typeof airlineName)
        //     return {...flight, airline_name: airlineName}
        // //   fetchAirline(flight?.airline);
        // });

        // console.log(newArr,'finalll');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function searchFlights() {
    const originValue = [...origin][0];
    const destinationValue = [...destination][0];
    // console.log([...origin][0], [...destination][0]);
    // check if origin = destination
    console.log(originValue, ":", destinationValue);
    if (originValue === destinationValue) {
      toast.error("Origin and destination can't be the same!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      //   make search api call here
      fetchFlights();
      //   fetchAirlines();
      // TODO remove setFetchedFlights(flights) from here
      //   setFetchedFlights(flights);
    }
  }

  useEffect(() => {
    fetchAirports();
  }, []);

  return (
    <>
      <ToastContainer />
      <SearchFlightBanner />
      {/* <div style={{}}>Flights</div> */}
      {/* search bar */}
      <div className="flight-search-bar">
        <div style={{ display: "flex", alignItems: "center", width: "270px" }}>
          <p style={{ margin: "0px 5px", whiteSpace: "nowrap" }}>Where From?</p>
          <InputDropdown
            // label="Where from?"
            values={airportList}
            selectedValueRef={origin}
            setSelectedValueRef={setOrigin}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "270px" }}>
          <p style={{ margin: "0px 5px", whiteSpace: "nowrap" }}>Where To?</p>
          <InputDropdown
            // label="Where from?"
            values={airportList}
            selectedValueRef={destination}
            setSelectedValueRef={setDestination}
          />
        </div>
        <div
          className="search-flights-calender"
          style={{ display: "flex", alignItems: "baseline", width: "270px" }}
        >
          {/* <input type="date" value={selectedDate} onChange={handleDateChange} /> */}
          <p style={{ margin: "0px 5px", whiteSpace: "nowrap" }}>
            Departure Date:
          </p>
          <input
            type="date"
            className="form-control"
            id="return-date-input"
            aria-describedby="return-date-label"
            defaultValue={date}
            onChange={handleDateChange}
          />
        </div>
        <Button
          color="primary"
          variant="bordered"
          size="sm"
          startContent={<SearchIcon />}
          onClick={searchFlights}
        >
          <p style={{ fontSize: "16px" }}>Search</p>
        </Button>
      </div>
      <SearchFlightsTable
        flightData={fetchedFlights}
        style={{ marginBottom: "50px" }}
      />
    </>
  );
}
