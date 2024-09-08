"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/nav/navigation-menu";

import Link from "next/link";

const MainNav = () => {
  return (
    <NavigationMenu className="h-16 min-w-full bg-blue-900 z-0 flex items-center justify-end lg:justify-center">
      <NavigationMenuList>
        <NavigationMenuItem className="hidden lg:flex">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-2 hidden lg:flex">
          <Link href="resume" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-2 hidden lg:flex">
          <Link href="projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-2 hidden lg:flex">
          <Link href="hobbies" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="flex pr-4 lg:hidden">
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>More about me!</NavigationMenuTrigger>
          <NavigationMenuContent className="flex justify-center items-center">
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
                </NavigationMenuLink>
            </Link>
            <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Resume
                </NavigationMenuLink>
            </Link>
            <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
                </NavigationMenuLink>
            </Link>
            <Link href="/hobbies" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
                </NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
