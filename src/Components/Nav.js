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
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* <Logo /> */}
        <img src={Logo} class="img-fluid" style={{ width: "10%" }} />
        <p className="font-bold text-inherit">Aeroshield</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
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
      </NavbarContent>
    </Navbar>
  );
}
export default Nav;
