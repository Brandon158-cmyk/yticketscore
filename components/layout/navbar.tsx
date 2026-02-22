"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const navCategories = [
  {
    label: "Sports",
    items: [
      {
        title: "NFL",
        href: "/sports/nfl",
        description: "Football tickets & schedules",
      },
      {
        title: "NBA",
        href: "/sports/nba",
        description: "Basketball games near you",
      },
      {
        title: "MLB",
        href: "/sports/mlb",
        description: "Baseball season tickets",
      },
      {
        title: "Soccer",
        href: "/sports/soccer",
        description: "MLS, Premier League & more",
      },
      {
        title: "NHL",
        href: "/sports/nhl",
        description: "Hockey games & playoffs",
      },
    ],
  },
  {
    label: "Music",
    items: [
      {
        title: "Concerts",
        href: "/music/concerts",
        description: "Live concerts & tours",
      },
      {
        title: "Festivals",
        href: "/music/festivals",
        description: "Music festivals worldwide",
      },
      {
        title: "Hip-Hop & R&B",
        href: "/music/hip-hop",
        description: "Top hip-hop shows",
      },
      {
        title: "Rock & Pop",
        href: "/music/rock-pop",
        description: "Rock and pop events",
      },
      {
        title: "Country",
        href: "/music/country",
        description: "Country music tours",
      },
    ],
  },
  {
    label: "Shows",
    items: [
      {
        title: "Comedy",
        href: "/shows/comedy",
        description: "Stand-up & comedy specials",
      },
      {
        title: "Theater",
        href: "/shows/theater",
        description: "Broadway & local theater",
      },
      {
        title: "Family",
        href: "/shows/family",
        description: "Family-friendly events",
      },
      {
        title: "Dance",
        href: "/shows/dance",
        description: "Ballet, modern & more",
      },
    ],
  },
  {
    label: "Cities",
    items: [
      {
        title: "New York",
        href: "/cities/new-york",
        description: "Events in NYC",
      },
      {
        title: "Los Angeles",
        href: "/cities/los-angeles",
        description: "Events in LA",
      },
      {
        title: "Chicago",
        href: "/cities/chicago",
        description: "Events in Chicago",
      },
      { title: "Miami", href: "/cities/miami", description: "Events in Miami" },
      {
        title: "London",
        href: "/cities/london",
        description: "Events in London",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Dropdown list item                                                 */
/* ------------------------------------------------------------------ */

function ListItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="mt-1.5 line-clamp-2 text-xs leading-snug opacity-70">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export type NavbarVariant = "transparent" | "default";

interface NavbarProps {
  variant?: NavbarVariant;
}

export function Navbar({ variant = "transparent" }: NavbarProps) {
  const isTransparent = variant === "transparent";

  return (
    <header
      className={cn(
        "top-0 left-0 z-50 w-full",
        isTransparent
          ? "absolute bg-transparent text-white"
          : "relative bg-neutral-950 text-white",
      )}
    >
      {/* Subtle gradient overlay for legibility on hero images */}
      {isTransparent && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent"
          aria-hidden
        />
      )}

      <nav className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* ---- Left: Logo + Nav categories ---- */}
        <div className="flex items-center gap-1">
          <Link href="/" className="mr-4 flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo-stab.png"
              alt="yaytickets logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority
            />
            <span className="text-lg font-bold tracking-tight">yaytickets</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {navCategories.map((category) => (
                  <NavigationMenuItem key={category.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent px-3 py-2 text-sm transition-opacity hover:bg-transparent hover:opacity-80 focus:bg-transparent data-[state=open]:bg-transparent",
                        "text-white font-normal cursor-pointer",
                      )}
                    >
                      {category.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[420px] gap-1 p-3 md:grid-cols-2">
                        {category.items.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            description={item.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* ---- Right: Action links + Auth ---- */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/sell"
            className="text-sm font-medium opacity-90 transition-opacity hover:opacity-100"
          >
            Sell Tickets
          </Link>
          <Button
            variant="ghost"
            className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            Sign In
          </Button>
        </div>

        {/* ---- Mobile: Hamburger ---- */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 border-neutral-800 bg-neutral-950 text-white"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-white">
                  <Image
                    src="/images/logo-stab.png"
                    alt="yaytickets logo"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  yaytickets
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 px-4 pt-4">
                {/* Categories */}
                {navCategories.map((category) => (
                  <div key={category.label}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      {category.label}
                    </p>
                    <div className="flex flex-col gap-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-white/10"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Action links */}
                <div className="border-t border-neutral-800 pt-4">
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/sell"
                      className="rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
                    >
                      Sell Tickets
                    </Link>
                  </div>
                </div>

                {/* Sign In */}
                <Button
                  variant="ghost"
                  className="w-full border border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
