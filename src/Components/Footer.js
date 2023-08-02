import React from "react";
import { Card, CardHeader, CardFooter, Link, Image } from "@nextui-org/react";

function Footer() {
  return (
    <Card className="max-w-[400px] ">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="logo.png"
          width={40}
        />
        <div className="flex flex-col ">
          <p className="text-md ">Aeroshield</p>
          <p className="text-small text-default-500 ">oneshield.com</p>
        </div>
      </CardHeader>

      <CardFooter>
        <Link isExternal showAnchorIcon href="https://oneshield.com/">
          Visit Us on OneShield.com
        </Link>
      </CardFooter>
    </Card>
  );
}
export default Footer;
