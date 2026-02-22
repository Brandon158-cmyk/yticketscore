"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ------------------------------------------------------------------ */
/*  Trending-event shape                                               */
/* ------------------------------------------------------------------ */

interface TrendingEvent {
  id: number;
  title: string;
  date: string;
  price: string;
  image: string;
}

/* ------------------------------------------------------------------ */
/*  Placeholder trending events data                                   */
/* ------------------------------------------------------------------ */

const trendingEvents: TrendingEvent[] = [
  {
    id: 1,
    title: "J. Cole",
    date: "Sep 3",
    price: "$137",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 2,
    title: "El Fantasma",
    date: "Mar 28",
    price: "$103",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 3,
    title: "Tame Impala with Djo",
    date: "Jul 15",
    price: "$199",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 4,
    title: "NCAA Baseball College World Series - Game 9",
    date: "Jun 16",
    price: "$76",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 5,
    title: "Taylor Swift - Eras Tour",
    date: "Aug 20",
    price: "$245",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 6,
    title: "Kendrick Lamar",
    date: "Oct 5",
    price: "$180",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 7,
    title: "Coldplay - Music of the Spheres",
    date: "Nov 12",
    price: "$165",
    image: "/images/hero-stadium.jpg",
  },
  {
    id: 8,
    title: "Bad Bunny",
    date: "Dec 1",
    price: "$210",
    image: "/images/hero-stadium.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Hero Banner                                                        */
/* ------------------------------------------------------------------ */

export function HeroBanner() {
  return (
    <section className="relative w-full bg-black">
      {/* ============================================================ */}
      {/*  Top section — Stadium image + headline + search             */}
      {/* ============================================================ */}
      <div className="relative flex min-h-[340px] w-full flex-col justify-center overflow-hidden pb-10 pt-24 lg:min-h-[400px]">
        {/* ---- Background image & gradients ---- */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-stadium.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[70%_center] grayscale"
            aria-hidden
          />
          {/* Simple vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        {/* ---- Content: Headline + Search ---- */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
              See the magic{" "}
              <span className="font-medium italic text-white/70">live.</span>
            </h1>
            <p className="mt-3 text-base text-white/70 sm:text-lg">
              Your next best night ever is waiting
            </p>
            {/* Search bar */}
            <div className="mt-6 mx-auto w-full max-w-lg">
              <div className="group relative">
                <SearchIcon className="absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-neutral-600" />
                <Input
                  type="text"
                  placeholder="What do you want to see live?"
                  className="h-12 w-full rounded-full border border-neutral-200 bg-white pl-12 pr-5 text-base font-medium text-neutral-900 shadow-lg transition-all placeholder:text-neutral-400 focus-visible:border-neutral-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                  aria-label="Search for events"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Trending Events — Carousel slider on solid black             */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-10">
        {/* Header row */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Trending Events</h2>
        </div>

        {/* ---- Desktop Carousel ---- */}
        <div className="hidden sm:block">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: "auto",
              containScroll: "trimSnaps",
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {trendingEvents.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="basis-1/2 pl-4 lg:basis-1/4"
                >
                  <Link href={`/events/${event.id}`} className="group block">
                    {/* Card image */}
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Card info */}
                    <div className="mt-3 px-0.5">
                      <p className="truncate text-base font-bold text-white">
                        {event.title}
                      </p>
                      <div className="mt-0.5 flex items-center justify-between">
                        <p className="text-sm text-white/50">{event.date}</p>
                        <p className="text-sm font-medium text-white/80">
                          From {event.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Native Shadcn Controls located appropriately */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 border-neutral-700 bg-neutral-900/80 text-white hover:bg-neutral-800 hover:text-white" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 border-neutral-700 bg-neutral-900/80 text-white hover:bg-neutral-800 hover:text-white" />
          </Carousel>
        </div>

        {/* ---- Mobile: Horizontal scroll with peek ---- */}
        <div
          className="flex gap-4 overflow-x-auto sm:hidden [&::-webkit-scrollbar]:hidden"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {/* Group events into columns of 3 */}
          {Array.from(
            { length: Math.ceil(trendingEvents.length / 3) },
            (_, groupIdx) => (
              <div
                key={groupIdx}
                className="flex shrink-0 flex-col gap-3"
                style={{ scrollSnapAlign: "start", width: "85%" }}
              >
                {trendingEvents
                  .slice(groupIdx * 3, groupIdx * 3 + 3)
                  .map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="group flex items-center gap-3"
                    >
                      {/* Thumbnail */}
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-bold text-white transition-colors group-hover:text-white/90">
                          {event.title}
                        </p>
                        <p className="text-sm font-medium text-white/60">
                          From {event.price}{" "}
                          <span className="mx-1 opacity-50">•</span>{" "}
                          {event.date}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
