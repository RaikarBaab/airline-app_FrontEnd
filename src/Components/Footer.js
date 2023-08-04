// import React from "react";

// function Footer() {
//   return (
//     <div className="container my-5">
//       <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
//         <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//           <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//             © 2023{" "}
//             <a href="https://flowbite.com/" class="hover:underline">
//               OneShield™
//             </a>
//             . All Rights Reserved.
//           </span>
//         </div>
//       </footer>
//     </div>

//     <Card className="max-w-[400px] footer">
//       <CardHeader className="flex gap-3">
//         <Image
//           alt="nextui logo"
//           height={40}
//           radius="sm"
//           src="logo.png"
//           width={40}
//         />
//         <div className="flex flex-col ">
//           <p className="text-md ">Aeroshield</p>
//           <p className="text-small text-default-500 ">oneshield.com</p>
//         </div>
//       </CardHeader>

//       <CardFooter>
//         <Link isExternal showAnchorIcon href="https://oneshield.com/">
//           Visit Us on OneShield.com
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }
// export default Footer;

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-white footer-container"
        style={{ backgroundColor: "#c3c3c4", width: "100%", color: "black" }}
      >
        <div className="container grid" style={{ display: "grid" }}>
          {/* <section className=""> */}
          {/* <div
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
              className="row text-center d-flex justify-content-center pt-5"
            >
              <div className="col-md-2 footer-content">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">About us</a>
                </h6>
              </div>
              <div className="col-md-2 footer-content">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!">Help</a>
                </h6>
              </div>
              <div className="col-md-2 footer-content">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="/contact-us">Contact Us</a>
                </h6>
              </div>
            </div> */}
          {/* </section> */}
          <hr
            style={{
              margin: "0.7rem",
              width: "975px",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
          <section className="mb-4">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h6 style={{ paddingBottom: "1rem" }}>
                  Elevating Your Journeys: Where Seamless Travel Experiences
                  Begin. Explore, Book, and Embark on Unforgettable Adventures
                  with Ease.
                </h6>
              </div>
            </div>
          </section>
          {/* Section: Text */}
          {/* Section: Social */}
          <section className="text-center mb-4">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright: All rights reserved.
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
      {/* </div> */}
      {/* End of .container */}
    </>
  );
}
