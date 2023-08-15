import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, UserPlus } from "lucide-react/dist/esm/lucide-react";

import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigationItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About us",
      link: "/about-us",
    },
    {
      id: 3,
      name: "Family Trees",
      link: "/familytree",
    },
  ];
  return (
    <div className="max-w-7xl m-auto">
      <div id="menu" className="flex justify-between items-center py-4">
        <div id="logo" className="font-bold text-xl">
          Family Tree
        </div>
        <div id="menu">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {navigationItems.map(({ id, name, link }) => {
                return (
                  <NavigationMenuItem key={id}>
                    <Link
                      to={`${link}`}
                      className="text-sm"
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink>{name}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div id="other">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to={"/login"} className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={"/signup"} className="flex items-center">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Signup</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
