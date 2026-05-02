import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";

type MenuDataProps<T> = {
  data: T[];
  title: (item: T) => string;
  href: (item: T) => string;
  className?: string;
};

function MenuData<T>({data, title, href, className}: MenuDataProps<T>) {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={`flex-col items-start ${className} text-gray-500`}
      >
        {data.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              className="text-[15px] text-gray-500 rounded-sm hover:bg-orange focus:bg-brown2"
              asChild
            >
              <Link href={href(item)}>{title(item)}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuData;
