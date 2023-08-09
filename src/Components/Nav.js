import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../../src/Components/Logos/airline-log.svg";
function Nav() {
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        {/* <Logo /> */}
        <img src={Logo} className="img-fluid" style={{ width: "10%" }} />
        <p className="font-bold text-inherit">Aeroshield</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/search">
            Search Flights
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Link href="/login">
            <Button as={Link} color="primary" variant="flat">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
export default Nav;
