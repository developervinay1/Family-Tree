import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogIn,
  LogInIcon,
  LogOut,
  User,
  User2,
  UserPlus,
} from "lucide-react/dist/esm/lucide-react";
import { auth } from "../../firebase";

import { Button } from "@/components/ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("userEmail");
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        alert("Logged Out");
        localStorage.clear();
        navigate("/");
        location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
              <Button onClick={signUserOut} variant="outline">
                <User2 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuGroup>
                {user ? (
                  <div>
                    <DropdownMenuItem>
                      <Button variant="link">
                        <Link to={"/signup"} className="flex items-center">
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button
                        variant="link"
                        onClick={signUserOut}
                        className="flex items-center"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log Out</span>
                      </Button>
                    </DropdownMenuItem>
                  </div>
                ) : (
                  <div>
                    <DropdownMenuItem>
                      <Button variant="link">
                        <Link to={"/login"} className="flex items-center">
                          <LogInIcon className="mr-2 h-4 w-4" />
                          <span>Login</span>
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button variant="link">
                        <Link to={"/signup"} className="flex items-center">
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Signup</span>
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                  </div>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
