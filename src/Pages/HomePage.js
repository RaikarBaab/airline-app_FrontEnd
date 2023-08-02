import React from "react";
import { Button } from "@nextui-org/react";
function HomePage() {
  return (
    <>
      <div class="w-64 h-64 hover-image-container">
        <img
          class="w-full h-full object-cover"
          src="airplane_2.jpg"
          alt="Image"
        ></img>
        <div class="centered hover-image-text">
          <p className="heading">
            <b>
              Welcome to Aeroshield,the cutting-edge Airline Management system
              that takes your flight experience to new heights.
              <p className="short-heading">Click to start your journey</p>{" "}
              <Button variant="bordered" color="warning">
                Explore
              </Button>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
export default HomePage;
