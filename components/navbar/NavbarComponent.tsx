"use client";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";
import { customize } from "../customize";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);

  return (
    <Navbar
      theme={customize.navbar}
      fluid
      rounded
      className="w-full bg-blue-800 flex justify-center "
    >
      <NavbarToggle className="text-white border-0 hover:text-primary sm:left-0 delay-75" />
      <NavbarBrand as={Link} href="/">
        <img
          src="https://istad.co/resources/img/logo_md.png"
          className="mr-3 h-8 "
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-bold text-white tracking-[.25em]">
          CSTAD
        </span>
      </NavbarBrand>

      <NavbarCollapse className="ml-20">
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathname}
            className="text-white text-md font-semibold mx-2"
          >
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
