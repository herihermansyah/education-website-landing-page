import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";
import {Button} from "./ui/button";

const menuHeader = [
  {id: 1, title: "Home", href: "/"},
  {id: 2, title: "About", href: "/"},
  {
    id: 3,
    title: "Courses",
    href: "#",
    children: [{id: 31, title: "Courses2", href: "/"}],
  },
  {
    id: 4,
    title: "Blog",
    href: "#",
    children: [{id: 41, title: "Blog2", href: "/"}],
  },
];

function MenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6.25 flex-col md:flex-row">
        {menuHeader.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.children ? (
              <>
                <NavigationMenuTrigger
                  className="text-[20px] font-semibold h-full rounded-sm p-1 relative cursor-pointer
                          hover:bg-orange focus:bg-brown2 
                          data-[state=open]:hover:bg-orange data-[state=open]:focus:bg-brown2
                          data-[state=open]:bg-orange"
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-10 absolute top-10 md:top-18 w-fit p-4 bg-cream rounded-sm">
                  <ul className="flex flex-col gap-4">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <NavigationMenuLink
                          className="text-[20px] font-semibold p-1 rounded-sm hover:bg-orange focus:bg-brown2"
                          asChild
                        >
                          <Link href={item.href}>{child.title}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className="text-[20px] font-semibold p-1 rounded-sm hover:bg-orange focus:bg-brown2"
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
        <Button className="bg-brown2 text-[20px] font-bold py-5 rounded-sm capitalize">
          contact us
        </Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuHeader;
