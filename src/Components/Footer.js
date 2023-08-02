import React from "react";

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            OneShield™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>

    // <Card className="max-w-[400px] footer">
    //   <CardHeader className="flex gap-3">
    //     <Image
    //       alt="nextui logo"
    //       height={40}
    //       radius="sm"
    //       src="logo.png"
    //       width={40}
    //     />
    //     <div className="flex flex-col ">
    //       <p className="text-md ">Aeroshield</p>
    //       <p className="text-small text-default-500 ">oneshield.com</p>
    //     </div>
    //   </CardHeader>

    //   <CardFooter>
    //     <Link isExternal showAnchorIcon href="https://oneshield.com/">
    //       Visit Us on OneShield.com
    //     </Link>
    //   </CardFooter>
    // </Card>
  );
}
export default Footer;
