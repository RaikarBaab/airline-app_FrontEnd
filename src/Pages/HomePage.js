import React from "react";
import { Button } from "@nextui-org/react";
function HomePage() {
  return (
    <>
      <div class="container-fluid w-100 h-auto m-0 p-0">
        <img
          src="airplane_2.jpg
        "
          class="img-fluid w-100 h-auto p-0 m-0"
          alt="..."
        ></img>

        <div class="centered">
          <h1>
            Welcome to Airoshield,<br></br>
          </h1>
          the cutting-edge Airline Management system that takes your flying
          experience to new heights Click to Start your journey..
          <Button size="md">Button</Button>
        </div>
      </div>
    </>
  );
}
export default HomePage;
