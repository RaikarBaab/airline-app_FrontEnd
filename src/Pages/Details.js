import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Button} from "@nextui-org/react";

export default function Details() {
  return (
    <div className="card">

    <Card radius="none" className="max-w-[400px]">
      {/* <CardHeader className="flex gap-3 card-header">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
          />
        <div className="flex flex-col">
          <p className="text-lg align-center">Airline Details</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader> */}
      <Divider/>
      <CardBody><div style={{marginLeft:"-20px",marginRight:"-20px"}}>

        <h1 className="card-header-content">Airline Details</h1>
      <Divider/>
      </div>
<div className="details-content">
      <b style={{fontSize:"20px"}}>Airline Code : <p>1234</p></b>
    <b style={{fontSize:"20px"}}>Airline Code :<p>1234</p></b>
    <b style={{fontSize:"20px"}}>Airline Code :<p>1234</p></b>
    <b style={{fontSize:"20px"}}>Airline Code :<p>1234</p></b>
    <b style={{fontSize:"20px"}}>Airline Code :<p>1234</p></b>
    <b style={{fontSize:"20px"}}>Airline Code :<p>1234</p></b>
    <b style={{fontSize:"20px"}}>Airline Code :<p>1234</p></b>
</div>
      </CardBody>
      <Divider/>
      <CardFooter className="justify-center">
        {/* <div className="card-footer"> */}

      <Button className='button' color="primary">
        Flights
      </Button>
      <Button className='button' color="primary">
        Airports
      </Button>
        {/* </div> */}
      </CardFooter>
    </Card>
            </div>
  );
}