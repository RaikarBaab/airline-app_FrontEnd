import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";

export default function Details() {
  return (
    <div
      className="flex-custom"
      style={{
        backgroundImage: "url('Details.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="card">
        <Card radius="md" className="max-w-[400px]" style={{ opacity: "0.7" }}>
          <CardHeader className="flex items-center justify-center gap-3 card-header">
            <div>
              <p
                // className="font-semibold"
                style={{ fontSize: "20px", fontWeight: "bolder" }}
              >
                Airline Details
              </p>
              {/* <p className="text-sm text-gray-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="details-content space-y-4">
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Code:</p>
                <p className="text-gray-600">1234</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Name:</p>
                <p className="text-gray-600">Your Airline Name</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Code:</p>
                <p className="text-gray-600">1234</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Name:</p>
                <p className="text-gray-600">Your Airline Name</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Code:</p>
                <p className="text-gray-600">1234</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Name:</p>
                <p className="text-gray-600">Your Airline Name</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Code:</p>
                <p className="text-gray-600">1234</p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">Airline Name:</p>
                <p className="text-gray-600">Your Airline Name</p>
              </div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="justify-center space-x-4">
            <Button className="button" color="primary">
              View Airports
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
