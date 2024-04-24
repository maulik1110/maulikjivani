"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const NavBar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-fit mx-auto z-50", className)}
      // max-w-2xl
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/project"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Projects"
          ></MenuItem>
        </Link>
       
        {/* <MenuItem active={active} setActive={setActive} item="Projects">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
          </div>
        </MenuItem> */}

        <Link href={"/contact"}>
        <MenuItem
            active={active}
            setActive={setActive}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;
