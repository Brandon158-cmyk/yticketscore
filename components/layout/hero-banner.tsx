"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  SearchIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ------------------------------------------------------------------ */
/*  Placeholder trending events data                                   */
/* ------------------------------------------------------------------ */

const trendingEvents = [
  {
    id: 1,
    title: "J. Cole",
    date: "Sep 3",
    price: "$137",
    image: "/images/hero-stadium.jpg",
    color: "from-amber-700 to-amber-900",
  },
  {
    id: 2,
    title: "El Fantasma",
    date: "Mar 28",
    price: "$103",
    image: "/images/hero-stadium.jpg",
    color: "from-emerald-700 to-emerald-900",
  },
  {
    id: 3,
    title: "Tame Impala with Djo",
    date: "Jul 15",
    price: "$199",
    image: "/images/hero-stadium.jpg",
    color: "from-violet-700 to-violet-900",
  },
  {
    id: 4,
    title: "NCAA Baseball College World Series - Game 9",
    date: "Jun 16",
    price: "$76",
    image: "/images/hero-stadium.jpg",
    color: "from-sky-700 to-sky-900",
  },
  {
    id: 5,
    title: "Taylor Swift - Eras Tour",
    date: "Aug 20",
    price: "$245",
    image: "/images/hero-stadium.jpg",
    color: "from-pink-700 to-pink-900",
  },
  {
    id: 6,
    title: "Kendrick Lamar",
    date: "Oct 5",
    price: "$180",
    image: "/images/hero-stadium.jpg",
    color: "from-red-700 to-red-900",
  },
  {
    id: 7,
    title: "Coldplay - Music of the Spheres",
    date: "Nov 12",
    price: "$165",
    image: "/images/hero-stadium.jpg",
    color: "from-indigo-700 to-indigo-900",
  },
  {
    id: 8,
    title: "Bad Bunny",
    date: "Dec 1",
    price: "$210",
    image: "/images/hero-stadium.jpg",
    color: "from-yellow-700 to-yellow-900",
  },
];

/* ------------------------------------------------------------------ */
/*  Hero Banner                                                        */
/* ------------------------------------------------------------------ */

export function HeroBanner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    };

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <section className="relative w-full bg-black">
      {/* ============================================================ */}
      {/*  Top section — Stadium image + headline + search             */}
      {/* ============================================================ */}
      <div className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden sm:min-h-[380px] lg:min-h-[420px]">
        {/* ---- Background image ---- */}
        <div
          className="absolute inset-0 bg-cover bg-position-[center_20%] bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-stadium.jpg')" }}
          aria-hidden
        />

        {/* ---- Gradient overlays — vignette on all sides ---- */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/80 via-black/40 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black via-black/90 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black/80 via-black/40 to-transparent lg:w-48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black/80 via-black/40 to-transparent lg:w-48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/30"
          aria-hidden
        />

        {/* ---- Sparkle / stardust texture ---- */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8), transparent),
                              radial-gradient(1px 1px at 25% 60%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(1.5px 1.5px at 40% 15%, rgba(255,255,255,0.9), transparent),
                              radial-gradient(1px 1px at 55% 75%, rgba(255,255,255,0.5), transparent),
                              radial-gradient(1px 1px at 70% 35%, rgba(255,255,255,0.7), transparent),
                              radial-gradient(1.5px 1.5px at 80% 80%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.8), transparent),
                              radial-gradient(1px 1px at 15% 90%, rgba(255,255,255,0.5), transparent),
                              radial-gradient(1.5px 1.5px at 60% 45%, rgba(255,255,255,0.7), transparent),
                              radial-gradient(1px 1px at 35% 50%, rgba(255,255,255,0.4), transparent),
                              radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(1px 1px at 5% 45%, rgba(255,255,255,0.5), transparent),
                              radial-gradient(1.5px 1.5px at 50% 5%, rgba(255,255,255,0.8), transparent),
                              radial-gradient(1px 1px at 75% 95%, rgba(255,255,255,0.4), transparent),
                              radial-gradient(1px 1px at 95% 65%, rgba(255,255,255,0.7), transparent)`,
          }}
        />

        {/* ---- Content: Headline + Search ---- */}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6 pt-16 pb-8 text-center sm:pt-16 lg:pt-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            See the magic live
          </h1>
          <p className="mt-3 text-base text-white sm:mt-4 sm:text-lg">
            Discover and book tickets for concerts, festivals, sports, and more
            happening across Zambia
          </p>
          {/* Search bar */}
          <div className="mt-7 w-full max-w-xl sm:mt-9">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 text-neutral-900" />
              {/* Mobile */}
              <Input
                type="text"
                placeholder="Performer, event, venue"
                className="h-16 w-full rounded-lg border-0 font-medium text-md bg-white pl-12 pr-4 text-lg text-neutral-900 shadow-lg placeholder:text-neutral-900 focus-visible:ring-2 focus-visible:ring-white/50 sm:hidden"
                aria-label="Search for events"
              />
              {/* Desktop */}
              <Input
                type="text"
                placeholder="Performer, event, venue"
                className="hidden h-16 w-full rounded-lg border-0 font-medium bg-white pl-12 pr-4 text-md text-neutral-900 shadow-lg placeholder:text-neutral-900 focus-visible:ring-2 focus-visible:ring-white/50 sm:block"
                aria-label="Search for events"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Trending Events — Carousel slider on solid black             */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-10">
        {/* Header row */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white sm:text-xl">
            Trending Events
          </h2>

          {/* Pagination + arrows (desktop) */}
          <div className="hidden items-center gap-2 sm:flex border border-white rounded-full bg-neutral-800 px-2 py-1">
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full border-neutral-700 text-white hover:bg-neutral-800 hover:text-white disabled:opacity-30"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            {count > 0 && (
              <span className="mr-1 text-sm text-white">
                {current} of {count}
              </span>
            )}

            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full border-neutral-700 text-white hover:bg-neutral-800 hover:text-white disabled:opacity-30"
              onClick={() => api?.scrollNext()}
              aria-label="Next"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
        </div>

        {/* ---- Desktop Carousel ---- */}
        <div className="hidden sm:block">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              slidesToScroll: 4,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {trendingEvents.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="basis-1/2 pl-4 lg:basis-1/4"
                >
                  <Link href={`/events/${event.id}`} className="group block">
                    {/* Card image */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${event.color}`}
                      />
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover opacity-50 transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>

                    {/* Card info */}
                    <div className="mt-3">
                      <p className="truncate text-lg font-semibold text-white">
                        {event.title}
                      </p>
                      <p className="mt-0.5 text-md text-neutral-400">
                        {event.date}
                      </p>
                      <p className="mt-0.5 text-md text-neutral-400">
                        From {event.price}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
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
                      <div
                        className={`relative size-12 shrink-0 overflow-hidden rounded-lg bg-linear-to-br ${event.color}`}
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover opacity-50"
                        />
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-md font-bold text-white">
                          {event.title}
                        </p>
                        <p className="text-md text-neutral-400">
                          From {event.price} · {event.date}
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
