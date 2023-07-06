import { MdOutlineArrowDownward, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import { Logo } from "./Logo";
import { navigationConstants } from "@/constants";
import { Button } from "./Button";
import { useState } from "react";
import { LinkButton } from "./LinkButton";

export const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="h-16 border-b border-gray-700">
      <div className="container px-4 lg:px-0 flex mx-auto h-full items-center justify-between">
        <Logo />
        <div className="items-center gap-8 hidden lg:flex">
          {navigationConstants.map((link) => (
            <Link className="font-medium" key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
          <LinkButton target="_blank" href="/ChoaibMouhrachCV.pdf">
            <MdOutlineArrowDownward /> Download resume
          </LinkButton>
        </div>
        <Button className="lg:hidden" onClick={() => setOpen(!open)}>
          <MdOutlineMenu className="text-xl" />
        </Button>
      </div>
      <div className={`h-0 pt-1 relative ${open ? "" : "hidden"}`}>
        <div className="absolute w-full bg-gray-900 border-b border-gray-600 p-4">
          <ul className="flex flex-col gap-4">
            {navigationConstants.map((link) => (
              <li key={link.name} className="font-medium">
                <Link className="font-medium block" href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <LinkButton target="_blank" href={"/ChoaibMouhrachCV.pdf"}>
                <MdOutlineArrowDownward /> Download resume
              </LinkButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
