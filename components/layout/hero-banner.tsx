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
  type CarouselApi,
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
      <div className="relative flex min-h-[500px] w-full flex-col justify-center overflow-hidden pb-16 pt-32 lg:min-h-[640px]">
        {/* ---- Background image & gradients ---- */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-stadium.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[70%_center]"
            aria-hidden
          />
          {/* Asymmetrical gradient mask */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent lg:via-black/70 lg:to-black/20" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/60" />
        </div>

        {/* ---- Sparkle / stardust texture ---- */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-15 mix-blend-screen"
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
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              See the magic{" "}
              <span className="font-medium italic text-white/70">live.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80 sm:mt-6 sm:text-xl">
              Discover and book tickets for concerts, festivals, sports, and
              more happening across Zambia.
            </p>
            {/* Search bar */}
            <div className="mt-8 w-full max-w-xl sm:mt-10">
              <div className="group relative">
                <SearchIcon className="absolute left-5 top-1/2 z-10 size-5 -translate-y-1/2 text-white/60 transition-colors group-focus-within:text-white" />
                <Input
                  type="text"
                  placeholder="Performer, event, venue..."
                  className="h-16 w-full rounded-2xl border border-white/20 bg-white/10 pl-14 pr-6 text-lg font-medium text-white shadow-2xl backdrop-blur-xl transition-all placeholder:text-white/50 focus-visible:border-white/40 focus-visible:bg-white/15 focus-visible:ring-0 focus-visible:ring-offset-0"
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
              slidesToScroll: "auto",
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
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:ring-white/10 group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                    </div>

                    {/* Card info */}
                    <div className="mt-4 px-1">
                      <p className="truncate text-lg font-bold text-white transition-colors">
                        {event.title}
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-sm font-medium text-white/60">
                          {event.date}
                        </p>
                        <p className="text-sm font-semibold text-white/90">
                          From {event.price}
                        </p>
                      </div>
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
