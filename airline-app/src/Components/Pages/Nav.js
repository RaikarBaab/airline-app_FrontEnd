import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Logo } from "../logo";
function Nav() {
  return (
    // <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       <img
    //         src="logo.png"
    //         alt="Logo"
    //         width="50"
    //         height="50"
    //         class="d-inline-block align-text-top"
    //       ></img>
    //     </a>
    //     <caption>
    //       <b>AiroShield</b>
    //     </caption>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item ml-5">
    //           <a class="nav-link active me-2" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link me-5" href="#">
    //             About
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Nav;
