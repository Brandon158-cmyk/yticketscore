"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const categories = [
  {
    id: "concerts",
    title: "Concerts",
    image: "/images/categories/concerts.png",
  },
  {
    id: "sports",
    title: "Sports",
    image: "/images/categories/sports.png",
  },
  {
    id: "comedy",
    title: "Comedy",
    image: "/images/categories/comedy.png",
  },
  {
    id: "arts-theater",
    title: "Arts & Theater",
    image: "/images/categories/arts.png",
  },
];

export function Categories() {
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
    <section className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Header row */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Categories
          </h2>

          {/* Pagination + arrows (desktop) */}
          <div className="hidden items-center gap-2 sm:flex rounded-full px-2 py-1">
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-100 disabled:opacity-30"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            {count > 0 && (
              <span className="mx-2 text-sm font-medium text-neutral-500">
                {current} of {count}
              </span>
            )}

            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-100 disabled:opacity-30"
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
              {categories.map((category) => (
                <CarouselItem
                  key={category.id}
                  className="basis-1/2 pl-4 lg:basis-1/4"
                >
                  <Link
                    href={`/categories/${category.id}`}
                    className="group block h-full"
                  >
                    {/* Card container */}
                    <div className="relative aspect-2/1 w-full overflow-hidden rounded-2xl bg-black">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Title overlay */}
                      <div className="absolute bottom-4 left-5 z-10">
                        <h3 className="text-lg font-bold text-white drop-shadow-md">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ---- Mobile: Horizontal scroll ---- */}
        <div
          className="flex gap-4 overflow-x-auto sm:hidden [&::-webkit-scrollbar]:hidden pb-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-[75%] shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link href={`/categories/${category.id}`} className="group block">
                <div className="relative aspect-2/1 w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-4 z-10">
                    <h3 className="text-base font-bold text-white drop-shadow-md">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
