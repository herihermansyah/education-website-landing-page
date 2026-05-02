"use client";
import React from "react";
import Logo from "../logo";
import MenuHeader from "../menu-header";
import ToggleMenu from "../toggle-menu";

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:container mx-auto xl:w-main pt-4 md:py-4">
      <div className="flex px-4 md:px-0 items-center justify-between relative">
        <Logo />
        <ToggleMenu
          className="block md:hidden"
          onClick={() => setOpen(!open)}
          clicked={open}
        />
        <div
          className={`absolute py-10 flex items-center justify-center md:static bg-cream w-full left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out -z-10
                    ${open ? "translate-y-54" : "-translate-y-full"}
                    md:static md:py-0 md:translate-y-0 md:left-0 md:translate-x-0 md:w-fit md:transition-none md:bg-transparent md:z-0
            `}
        >
          <MenuHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
